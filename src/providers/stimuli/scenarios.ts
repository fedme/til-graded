export const SCENARIOS = [
    {
        "id": 1,
        "asker": "reda",
        "actor": "toma",
        "text_1": {
            "de": "Das ist Toma. <br>Toma ist öfters zu spät für die Schule.<br>Die letzten achtmal ist er aufgrund folgender Ursachen zu spät gewesen",
            "en": "This is Toma. <br>Toma is often late for school.<br>The last eight times he was late for the following reasons"
        },
        "text_2": {
            "de": "Toma war wiedermal zu spät.<br>Tomas Freundin Reda will herausfinden warum.<br>Sie fragt Toma: Warst du zu spät in der Schule, weil",
            "en": "Today, Toma was late again.<br> His friend Reda already knows why Toma was late the last eight times.<br>Do you remember?<br>Now, Reda wants to find out for which of these reasons Toma was late for school again.<br>She asks Toma: Were you late for school because"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du etwas nicht finden konntest?",
                    "en": "you couldn’t find something?"
                },
                "bubble": [
                    "bycicle",
                    "hat",
                    "socks"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "overslept",
                    "overslept",
                    "overslept",
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "socks"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "du spät schlafen gingst?",
                    "en": "you slept late?"
                },
                "bubble": [
                    "overslept"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "overslept",
                    "overslept",
                    "overslept",
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "socks"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "du dein Fahrrad nicht finden konntes?",
                    "en": "you couldn’t find your bike?"
                },
                "bubble": [
                    "bycicle"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "overslept",
                    "overslept",
                    "overslept",
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "socks"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "du deine Socken nicht finden konntes?",
                    "en": "you couldn’t find your socks?"
                },
                "bubble": [
                    "socks"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "overslept",
                    "overslept",
                    "overslept",
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "socks"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "du ein Kleidungsstück nicht finden konntest?",
                    "en": "you couldn’t find a piece of clothing?"
                },
                "bubble": [
                    "hat",
                    "socks"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "overslept",
                    "overslept",
                    "overslept",
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "socks"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "du etwas nicht finden konntest?",
                    "en": "you couldn’t find something?"
                },
                "bubble": [
                    "bycicle",
                    "hat",
                    "socks"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "hat",
                    "hat",
                    "hat",
                    "socks"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "du ein Kleidungsstück nicht finden konntest?",
                    "en": "you couldn’t find a piece of clothing?"
                },
                "bubble": [
                    "hat",
                    "socks"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "overslept",
                    "overslept",
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "hat",
                    "socks"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "du spät schlafen gingst?",
                    "en": "you slept late?"
                },
                "bubble": [
                    "overslept"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "overslept",
                    "overslept",
                    "overslept",
                    "bycicle",
                    "bycicle",
                    "hat",
                    "hat",
                    "socks"
                ]
            }
        ]
    },
    {
        "id": 2,
        "asker": "kota",
        "actor": "fidi",
        "text_1": {
            "de": "Das ist Fidi. <br>Fidi nimmt Schwimmunterricht, aber er verpasst diesen oft.<br>Die letzten achtmal hat er den Schwimmunterricht aufgrund folgender Ursachen verpasst",
            "en": "This is Fidi. <br>Fidi goes to swimming class, but he often misses them.<br>The last eight times he missed his swimming class for the following reasons"
        },
        "text_2": {
            "de": "Fidi hat seinen Schwimmunterricht diese Woche wieder verpasst.<br>Seine Freundin Kota will herausfinden warum.<br>Sie fragt Fidi: Hast du den Schwimmkurs verpasst, weil",
            "en": "Today, Fidi missed his swimming class again.<br>His friend Kota already knows these are the reasons why Fidi missed his swimming class the last eight times.<br>Do you remember? <br> Now, Kota wants to find out for which of these reasons Fidi missed his swimming class again.<br>She asks Fidi: Did you miss you swimming class because"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du woanders hin gegangen bist?",
                    "en": "you went somewhere else?"
                },
                "bubble": [
                    "cake",
                    "dog",
                    "cat"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "bus",
                    "bus",
                    "bus",
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "cat"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "du den Bus verpasst hast?",
                    "en": "you missed the bus?"
                },
                "bubble": [
                    "bus"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "bus",
                    "bus",
                    "bus",
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "cat"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "du bei einer Geburtstagsfeier warst?",
                    "en": "you went to a birthday party?"
                },
                "bubble": [
                    "cake"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "bus",
                    "bus",
                    "bus",
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "cat"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "du deine Katze zum Tierarzt gebracht hast?",
                    "en": "you took your cat to the animal doctor?"
                },
                "bubble": [
                    "cat"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "bus",
                    "bus",
                    "bus",
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "cat"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "du beim Tierarzt warst?",
                    "en": "you took your pet to the animal doctor?"
                },
                "bubble": [
                    "dog",
                    "cat"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "bus",
                    "bus",
                    "bus",
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "cat"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "du woanders hin gegangen bist?",
                    "en": "you went somewhere else?"
                },
                "bubble": [
                    "cake",
                    "dog",
                    "cat"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "dog",
                    "dog",
                    "dog",
                    "cat"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "du beim Tierarzt warst?",
                    "en": "you took your pet to the animal doctor?"
                },
                "bubble": [
                    "dog",
                    "cat"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "bus",
                    "bus",
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "dog",
                    "cat"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "du den Bus verpasst hast?",
                    "en": "you missed the bus?"
                },
                "bubble": [
                    "bus"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "bus",
                    "bus",
                    "bus",
                    "cake",
                    "cake",
                    "dog",
                    "dog",
                    "cat"
                ]
            }
        ]
    },
    {
        "id": 3,
        "asker": "miru",
        "actor": "reda",
        "text_1": {
            "de": "Das ist Reda. <br>Reda isst ihr Abendessen oft nicht auf.<br>Die letzten achtmal hat sie ihr Abendessen aufgrund folgender Ursachen nicht aufgegessen",
            "en": "This is Reda. <br>Reda often doesn’t finish her dinner.<br>The last eight times she didn’t finish her dinner for the following reasons"
        },
        "text_2": {
            "de": "Reda hat ihr Abendessen heute wiedermal nicht afgegessen.<br>Ihr Freund Miru will herausfinden warum.<br>Er fragt Reda: Hast du dein Abendessen nicht beendet, weil",
            "en": "Today, Reda didn’t finish her dinner again.<br>Her friend Miru already knows why Reda didn't finish her dinner the last eight times.<br>Do you remember?<br>Now, Miru wants to find out for which of these reasons Reda didn't finish her dinner again.<br>He asks Reda: Did you not finish your dinner because"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du etwas darin nicht magst?",
                    "en": "you didn't like something in your dinner plate?"
                },
                "bubble": [
                    "tomato",
                    "broccoli",
                    "peas"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "peas"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "du einen Keks gegessen hast und  nicht mehr hungrig warst?",
                    "en": "you ate a biscuit and weren't hungry?"
                },
                "bubble": [
                    "biscuit"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "peas"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "du keine Tomaten magst?",
                    "en": "you didn't like the tomatoes?"
                },
                "bubble": [
                    "tomato"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "peas"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "du keine Erbsen magst?",
                    "en": "you didn't like the peas?"
                },
                "bubble": [
                    "peas"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "peas"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "du kein grünes Gemüse magst?",
                    "en": "you didn't like green vegetables?"
                },
                "bubble": [
                    "broccoli",
                    "peas"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "peas"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "du etwas darin nicht magst?",
                    "en": "you didn't like something in your dinner plate?"
                },
                "bubble": [
                    "tomato",
                    "broccoli",
                    "peas"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "broccoli",
                    "broccoli",
                    "broccoli",
                    "peas"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "du kein grünes Gemüse magst?",
                    "en": "you didn't like green vegetables?"
                },
                "bubble": [
                    "broccoli",
                    "peas"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "broccoli",
                    "peas"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "du einen Keks gegessen hast und nicht mehr hungrig warst?",
                    "en": "you ate a biscuit and weren't hungry?"
                },
                "bubble": [
                    "biscuit"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "biscuit",
                    "biscuit",
                    "biscuit",
                    "tomato",
                    "tomato",
                    "broccoli",
                    "broccoli",
                    "peas"
                ]
            }
        ]
    },
    {
        "id": 4,
        "asker": "leli",
        "actor": "domu",
        "text_1": {
            "de": "Das ist Domu. <br>Domu hat ein Spielzeugauto, aber dieses funktioniert oft nicht.<br>Die letzten achtmal hat Domus Spielzeugauto aufgrund der folgenden Ursachen nicht funktioniert",
            "en": "This is Domu. <br>Domu has a toy car but his toy car is often not working.<br>In the last eight times, Domu’s car was not working for the following reasons"
        },
        "text_2": {
            "de": "Domus Auto funktioniert wiedermal nicht.<br>Seine Freundin Leli will heruasfinden warum.<br>Sie fragt Domu: Funktioniert dein Auto nicht, weil",
            "en": "Today, Domu’s toy car is not working again.<br>His friend Leli knows these are the reasons why Domu's toy car was not working the last eight times.<br>Do you remember?<br>Now Leli wants to find out for which of these reasons his toy car isn’t working again.<br>She asks Domu: Is your toy car not working because"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "jemand in deiner Familie es kaputt gemacht hat?",
                    "en": "someone in your family broke it?"
                },
                "bubble": [
                    "foot",
                    "wheel",
                    "water"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "battery",
                    "battery",
                    "battery",
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "water"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "die Batterie leer ist?",
                    "en": "the batteries ran out?"
                },
                "bubble": [
                    "battery"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "battery",
                    "battery",
                    "battery",
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "water"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "deine Mutter darauf getreten ist?",
                    "en": "your mother stepped on it?"
                },
                "bubble": [
                    "foot"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "battery",
                    "battery",
                    "battery",
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "water"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "dein Bruder es in Wasser fallen liess?",
                    "en": "your brother dropped it into water?"
                },
                "bubble": [
                    "water"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "battery",
                    "battery",
                    "battery",
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "water"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "eines deiner Geschwister es kaputt gemacht hat?",
                    "en": "your sibling broke it?"
                },
                "bubble": [
                    "wheel",
                    "water"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "battery",
                    "battery",
                    "battery",
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "water"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "jemand in deiner Familie es kaputt gemacht hat?",
                    "en": "someone in your family broke it?"
                },
                "bubble": [
                    "foot",
                    "wheel",
                    "water"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "wheel",
                    "wheel",
                    "wheel",
                    "water"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "eines deiner Geschwister es kaputt gemacht hat?",
                    "en": "your sibling broke it?"
                },
                "bubble": [
                    "wheel",
                    "water"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "battery",
                    "battery",
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "wheel",
                    "water"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "die Batterie leer ist?",
                    "en": "the batteries ran out?"
                },
                "bubble": [
                    "battery"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "battery",
                    "battery",
                    "battery",
                    "foot",
                    "foot",
                    "wheel",
                    "wheel",
                    "water"
                ]
            }
        ]
    },
    {
        "id": 5,
        "asker": "toma",
        "actor": "mimi",
        "text_1": {
            "de": "Das ist Mimi. <br>Mimi hat glänzende, weiße Schuhe.<br>Die letzten achtmal waren sie schmutzig aufgrund folgender Ursachen",
            "en": "This is Mimi. <br>Mimi has shiny white shoes but they are often dirty.<br>The last eight times, they were dirty for the following reasons"
        },
        "text_2": {
            "de": "Mimis Schuhe sind wiedermal schmutzig.<br>Ihr Freund Toma will herausfinden warum.<br>Er fragt Mimi: Sind deine Schuhe schmutzig, weil",
            "en": "Today, Mimi’s shoes are dirty again.<br>Her friend Toma already knows why Mimi's shoes were dirty the last eight times.<br>Do you remember?<br>Now, Toma wants to find out for which of these reasons Mimi's shoes are dirty again.<br>He asks Mimi: Are your shoes dirty because"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du etwas darauf verschüttet hast?",
                    "en": "you spilled something on them?"
                },
                "bubble": [
                    "paint",
                    "chocolate",
                    "juice"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "mud",
                    "mud",
                    "mud",
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "juice"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "du durch den Schlamm gelaufen bist?",
                    "en": "you stepped into the mud?"
                },
                "bubble": [
                    "mud"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "mud",
                    "mud",
                    "mud",
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "juice"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "du Farbe darauf verschüttet hast?",
                    "en": "you spilled paint on them?"
                },
                "bubble": [
                    "paint"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "mud",
                    "mud",
                    "mud",
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "juice"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "du Tomatensaft darauf verschüttet hast?",
                    "en": "you spilled tomato juice on them?"
                },
                "bubble": [
                    "juice"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "mud",
                    "mud",
                    "mud",
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "juice"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "du ein Getränk darauf verschüttet hast?",
                    "en": "you spilled a drink on them?"
                },
                "bubble": [
                    "chocolate",
                    "juice"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "mud",
                    "mud",
                    "mud",
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "juice"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "du etwas darauf verschüttet hast?",
                    "en": "you spilled something on them?"
                },
                "bubble": [
                    "paint",
                    "chocolate",
                    "juice"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "chocolate",
                    "chocolate",
                    "chocolate",
                    "juice"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "du ein Getränk darauf verschüttet hast?",
                    "en": "you spilled a drink on them?"
                },
                "bubble": [
                    "chocolate",
                    "juice"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "mud",
                    "mud",
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "chocolate",
                    "juice"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "du durch den Schlamm gelaufen bist?",
                    "en": "you stepped into the mud?"
                },
                "bubble": [
                    "mud"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "mud",
                    "mud",
                    "mud",
                    "paint",
                    "paint",
                    "chocolate",
                    "chocolate",
                    "juice"
                ]
            }
        ]
    },
    {
        "id": 6,
        "asker": "fidi",
        "actor": "leli",
        "text_1": {
            "de": "Das ist Leli. <br>Leli ist ein glückliches Mädchen aber sie weint oft.<br>Die letzten achtmal hat Leli geweint aufgrund folgender Ursachen",
            "en": "This is Leli. <br>Leli is a happy girl but she cries often.<br>The last eight times Leli was crying for the following reasons"
        },
        "text_2": {
            "de": "Leli weint heute wieder.<br>Ihr Freund Fidi will herausfrinden warum.<br>Er fragt Leli: Weinst du, weil",
            "en": "Today, Leli is crying again.<br>Her friend Fidi already knows why Leli was crying the last eight times.<br>Do you remember?<br> Now, Fidi wants to find out for which of these reasons Leli is crying again today.<br>He asks Leli: Are you crying because"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "dein Bruder dir etwas angetan hat?",
                    "en": "of something your brother did?"
                },
                "bubble": [
                    "shout",
                    "elephant",
                    "horse"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "plaster",
                    "plaster",
                    "plaster",
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "horse"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "du hingefallen bist und dich verletzt hast?",
                    "en": "you fell down and hurt yourself?"
                },
                "bubble": [
                    "plaster"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "plaster",
                    "plaster",
                    "plaster",
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "horse"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "dein Bruder dich angeschrien hat?",
                    "en": "your brother shouted at you?"
                },
                "bubble": [
                    "shout"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "plaster",
                    "plaster",
                    "plaster",
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "horse"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "dein Bruder dein Spielzeugpferd kaputt gemacht hat?",
                    "en": "your brother broke your toy horse?"
                },
                "bubble": [
                    "horse"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "plaster",
                    "plaster",
                    "plaster",
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "horse"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "dein Bruder eines deiner Spielzeuge kaputt gemacht hat?",
                    "en": "your brother broke one of your toys?"
                },
                "bubble": [
                    "elephant",
                    "horse"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "plaster",
                    "plaster",
                    "plaster",
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "horse"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "dein Bruder dir etwas angetan hat?",
                    "en": "of something your brother did?"
                },
                "bubble": [
                    "shout",
                    "elephant",
                    "horse"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "elephant",
                    "elephant",
                    "elephant",
                    "horse"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "dein Bruder eines deiner Spielzeuge kaputt gemacht hat?",
                    "en": "your brother broke one of your toys?"
                },
                "bubble": [
                    "elephant",
                    "horse"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "plaster",
                    "plaster",
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "elephant",
                    "horse"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "du hingefallen bist und dich verletzt hast?",
                    "en": "you fell down and hurt yourself?"
                },
                "bubble": [
                    "plaster"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "plaster",
                    "plaster",
                    "plaster",
                    "shout",
                    "shout",
                    "elephant",
                    "elephant",
                    "horse"
                ]
            }
        ]
    },
    {
        "id": 7,
        "asker": "domu",
        "actor": "kota",
        "text_1": {
            "de": "Das ist Kota. <br>Kota liebt es draußen zu spielen.<br>Aber manchmal mag sie draußen spielen nicht.<br>Die letzten achtmal hat sie draußen nicht gespielt aufgrund folgender Ursachen",
            "en": "This is Kota. <br>Kota loves playing outside.<br>But sometimes she doesn’t play outside.<br>The last eight times she didn’t play outside for the following reasons"
        },
        "text_2": {
            "de": "Kota hat heute wieder nicht draußen gespielt.<br>Ihr Freund Domu will herausfinden warum.<br>Er fragt Kota: Wolltest Du  nicht draußen spielen, weil",
            "en": "Today, Kota didn’t play outside again.<br>Her friend Domu already knows why Kota didn't play outside the last eight times.<br> Do you remember?<br> Now, Domu wants to find out for which of these reasons Kota didn't play outside again.<br>He asks Kota: Did you not play outside because "
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "das Wetter nicht gut war?",
                    "en": "the weather was not right?"
                },
                "bubble": [
                    "hot",
                    "snow",
                    "wind"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "playground",
                    "playground",
                    "playground",
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "wind"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "der Spielplatz gesperrt war?",
                    "en": "the playground was closed?"
                },
                "bubble": [
                    "playground"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "playground",
                    "playground",
                    "playground",
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "wind"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "es zu warm war?",
                    "en": "it was too hot?"
                },
                "bubble": [
                    "hot"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "playground",
                    "playground",
                    "playground",
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "wind"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "es zu windig war?",
                    "en": "it was too windy?"
                },
                "bubble": [
                    "wind"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "playground",
                    "playground",
                    "playground",
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "wind"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "es zu kalt war?",
                    "en": "it was too cold?"
                },
                "bubble": [
                    "snow",
                    "wind"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "playground",
                    "playground",
                    "playground",
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "wind"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "das Wetter nicht gut war?",
                    "en": "the weather was not right?"
                },
                "bubble": [
                    "hot",
                    "snow",
                    "wind"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "snow",
                    "snow",
                    "snow",
                    "wind"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "es zu kalt war?",
                    "en": "it was too cold?"
                },
                "bubble": [
                    "snow",
                    "wind"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "playground",
                    "playground",
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "snow",
                    "wind"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "der Spielplatz gesperrt war?",
                    "en": "the playground was closed?"
                },
                "bubble": [
                    "playground"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "playground",
                    "playground",
                    "playground",
                    "hot",
                    "hot",
                    "snow",
                    "snow",
                    "wind"
                ]
            }
        ]
    },
    {
        "id": 8,
        "asker": "mimi",
        "actor": "tuba",
        "text_1": {
            "de": "Das ist Tuba. <br>Tuba sieht sich gern Trickfilme an.<br>Aber manchmal sieht er sich keine an.<br>Die letzten achtmal hat er sich keine Trickfilme angesehen aufgrund folgender Ursachen",
            "en": "This is Tuba. <br>Tuba likes to watch cartoons but sometimes he doesn’t watch them.<br>The last eight times Tuba didn't watch cartoons because of the following reasons"
        },
        "text_2": {
            "de": "Heute hat Tuba keine Trickfilme geschaut.<br>Sein Freundin Mimi will herausfinden warum.<br>Sie fragt Tuba: Hast du heute keine Trickfilme geschaut, weil",
            "en": "Today, Tuba didn't watch cartoons again.<br>His friend Mimi already knows why Tuba didn't watch cartoons the last eight times.<br>Do you remember?<br>Now, Mimi wants to find out for which of these reasons Tuba didn't watch cartoons today.<br>She asks Tuba: Did you not watch cartoons today because"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "jemand anderes etwas anschaute?",
                    "en": "you watched something else?"
                },
                "bubble": [
                    "film",
                    "football",
                    "tennis"
                ],
                "type": "CS4",
                "ig": 1,
                "hints": [
                    "outside",
                    "outside",
                    "outside",
                    "outside",
                    "film",
                    "film",
                    "football",
                    "tennis"
                ]
            },
            {
                "id": 2,
                "text": {
                    "de": "du stattdessen draußen gespielt hast?",
                    "en": "you played outside instead?"
                },
                "bubble": [
                    "outside"
                ],
                "type": "HS4",
                "ig": 1,
                "hints": [
                    "outside",
                    "outside",
                    "outside",
                    "outside",
                    "film",
                    "film",
                    "football",
                    "tennis"
                ]
            },
            {
                "id": 3,
                "text": {
                    "de": "deine Mutter einen Film anschaute?",
                    "en": "you watched a film?"
                },
                "bubble": [
                    "film"
                ],
                "type": "HS2",
                "ig": 0.81,
                "hints": [
                    "outside",
                    "outside",
                    "outside",
                    "outside",
                    "film",
                    "film",
                    "football",
                    "tennis"
                ]
            },
            {
                "id": 4,
                "text": {
                    "de": "dein Vater Tennis anschaute?",
                    "en": "you watched tennis on TV?"
                },
                "bubble": [
                    "tennis"
                ],
                "type": "HS1",
                "ig": 0.54,
                "hints": [
                    "outside",
                    "outside",
                    "outside",
                    "outside",
                    "film",
                    "film",
                    "football",
                    "tennis"
                ]
            },
            {
                "id": 5,
                "text": {
                    "de": "dein Vater etwas anderes anschaute?",
                    "en": "you watched sports on TV?"
                },
                "bubble": [
                    "football",
                    "tennis"
                ],
                "type": "CS2",
                "ig": 0.81,
                "hints": [
                    "outside",
                    "outside",
                    "outside",
                    "outside",
                    "film",
                    "film",
                    "football",
                    "tennis"
                ]
            },
            {
                "id": 6,
                "text": {
                    "de": "jemand anderes etwas anschaute?",
                    "en": "you watched something else?"
                },
                "bubble": [
                    "film",
                    "football",
                    "tennis"
                ],
                "type": "CS7",
                "ig": 0.54,
                "hints": [
                    "outside",
                    "film",
                    "film",
                    "football",
                    "football",
                    "football",
                    "football",
                    "tennis"
                ]
            },
            {
                "id": 7,
                "text": {
                    "de": "dein Vater etwas anderes anschaute?",
                    "en": "you watched sports on TV?"
                },
                "bubble": [
                    "football",
                    "tennis"
                ],
                "type": "CS3",
                "ig": 0.95,
                "hints": [
                    "outside",
                    "outside",
                    "outside",
                    "film",
                    "film",
                    "football",
                    "football",
                    "tennis"
                ]
            },
            {
                "id": 8,
                "text": {
                    "de": "du stattdessen draußen gespielt hast?",
                    "en": "you played outside instead?"
                },
                "bubble": [
                    "outside"
                ],
                "type": "HS3",
                "ig": 0.95,
                "hints": [
                    "outside",
                    "outside",
                    "outside",
                    "film",
                    "film",
                    "football",
                    "football",
                    "tennis"
                ]
            }
        ]
    }
]