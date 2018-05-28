import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { Stimuli } from '../stimuli/stimuli';
import { Api } from '../api/api';
import { AppInfo } from '../stimuli/app-info';

@Injectable()
export class Data {

  recordsNumber: number;
  data: Map<string, any>;
  allRecords;

  constructor(private storage: Storage, private filesystem: File, private api: Api,
    private stimuli: Stimuli) {
      console.log('Hello Data Provider');
  }

  initialize() {
    this.data = null;
    this.allRecords = null;
    this.updateRecordsNumber();
  }

  save() {
    console.log("[DEBUG] DB driver: " + this.storage.driver);
    const recordId = "record_" + this.stimuli.participant.code;
    let dataObject = this.serializeStimuliData();
    console.log("[DEBUG] Serialized data: ", dataObject);

    if (this.stimuli.runInBrowser) {
      const jsonData = JSON.stringify(dataObject);
      console.log("[saving data][browser][participant_code]", this.stimuli.participant.code);
      console.log("[saving data][browser][data]", dataObject);
      //console.log("[saving data][browser][jsonData]", jsonData);

      const requestBody = {
        participant_code: this.stimuli.participant.code,
        condition: this.stimuli.conditionId,
        reward: dataObject["reward_mturk_total_euros"],
        data: jsonData
      };
      this.api.post('store-data/halo', requestBody).subscribe(
        (resp) => {
          console.log("[saving data][browser][POST] resp", resp);
        }, 
        (err) => {
          console.log("[saving data][browser][POST] ERROR!!!", err);
        }
      );
    }
    else {
      console.log("[saving data][app][data]", dataObject);
      this.storage.set(recordId, dataObject);
    }
  }

  serializeStimuliData() {
    // calculate exp duration
    const duration = Math.floor(Date.now() - this.stimuli.initialTimestamp);

    // data map
    let data = new Map();

    // save participant data
    data.set("participant_code", this.stimuli.participant.code);
    data.set("participant_age", this.stimuli.participant.age);
    data.set("participant_age_group", this.stimuli.participant.age);
    data.set("participant_grade", this.stimuli.participant.grade);
    data.set("participant_gender", this.stimuli.participant.gender);

    // save app data
    data.set("app_id", AppInfo.id);
    data.set("app_version", AppInfo.version);
    data.set("app_nameLabel", AppInfo.nameLabel);

    // save session data
    data.set("session_datetime", Date.now());
    data.set("session_datetime_human", Date.now().toLocaleString());
    data.set("session_duration_seconds", duration);

    // save conditions data
    data.set("condition_index", this.stimuli.conditionId);
    data.set("ratings", this.stimuli.ratings);

    this.data = data;

    return this.mapToObj(data);
  }

  getSessionDataAsHtml() {
    let out = "<table border='1'><tr><th>key</th><th>value</th></tr>";
    if (this.data != null) {
      this.data.forEach((value, key, map) => {
        out = out + "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
      });
    }
    out = out + "</table>";
    return out;
  }

  loadAllRecords() {
    this.storageGetAll()
      .then(records => {
        console.log("[debug] storage.loadAllRecords()");
        this.allRecords = records;
        console.log(this.allRecords);
      });
  }

  exportRecordsAsJSON() {
    this.storageGetAll()
      .then(records => {
        console.log("records:");
        console.log(records);
        let fileContent = JSON.stringify(records);
        this.saveOutputFile(fileContent, "json");
      });
  }

  exportRecordsAsCsv() {
    this.storageGetAll()
      .then(records => {
        console.log("records:");
        console.log(records);
        let csvContent = this.fromRecordsToCsv(records);
        this.saveOutputFile(csvContent, "csv");
      });
  }

  updateRecordsNumber() {
    this.storageGetAll()
      .then(records => {
        if (records == null) return 0;
        this.recordsNumber = records.length;
      });
  }

  /**
   * Returns a Promise with the raw records from Storage
   */
  storageGetAll() {
    return this.storage.keys()
      .then(keys => Promise.all(keys.map(k => this.storage.get(k))));
  }


  fromRecordsToCsv(records) {
    console.log("[DEBUG] fromRecordsToCsv: ", records);
    let csvKeys = [];
    let csvRows = [];
    let first = true;
    for (let record of records) {
      if (first) {
        csvKeys = Object.keys(record).map(x => JSON.stringify(x));
        first = false;
      }
      let csvRow = Object.keys(record).map(key=>record[key]).map(x => JSON.stringify(x));
      csvRows.push(csvRow.join(","));
    }
    let csvContent = csvKeys.join(",") + "\n";
    csvContent += csvRows.join("\n");
    return csvContent;
  }


  saveOutputFile(csvContent, fileExt = "csv") {
    // build file name
    let currentdate = new Date();
    let day = ("0" + currentdate.getDate()).slice(-2);
    let month = ("0" + (currentdate.getMonth() + 1)).slice(-2);
    let filename = "data-" + day + month + currentdate.getFullYear() + "-"
      + currentdate.getHours() + currentdate.getMinutes() + "." + fileExt;

    // access file system
    this.filesystem.resolveDirectoryUrl(this.filesystem.externalDataDirectory)
      .then(directory => {
        // get or create results file
        this.filesystem.getFile(directory, filename, { create: true, exclusive: false })
          .then(file => {
            console.log("fileEntry is file?" + file.isFile.toString());
            this.writeFile(file, csvContent);
          })
          .catch(err => {
            console.log("Resolve file error: " + err);
          });
      })
      .catch(err => {
        console.log("Resolve filesystem error: " + err);
      });
  }

  writeFile(fileEntry, data) {
    fileEntry.createWriter(
      function (writer) {
        writer.onwriteend = function (evt) {
          console.log("File successfully created!");
        };
        writer.write(data);
      },
      function (evt, where) {
        console.log("Error writing file " + where + " :");
        console.log(JSON.stringify(evt));
      }
    );
  }

  mapToObj(strMap) {
    let obj = {};
    strMap.forEach((value, key, map) => {
      obj[key] = value;
    });
    return obj;
  }

}
