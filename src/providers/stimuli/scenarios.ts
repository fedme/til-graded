export const SCENARIOS = [
    {
        "id": 1,
        "asker": "reda",
        "actor": "toma",
        "text_1": {
            "de": "Das ist Toma. <br>Toma ist öfters zu spät in der Schule.<br>Die letzten achtmal ist er wegen folgender Gründe zu spät gewesen",
            "en": "This is Toma. <br>Toma is often late for school.<br>The last eight times he was late for the following reasons",
            "es": "Toma llega tarde a la escuela frecuentemente.<br>Las últimas 8 veces llegó tarde por las siguientes razones", 
            "notext": "Index 9"
        },
        "text_2": {
            "de": "Toma war wiedermal zu spät.<br>Tomas Freundin Reda wird das Fragenspiel spielen, um so schnell wie möglich herauszufinden warum.<br> Denk daran, das hier sind die Gründe warum Toma die letzten 8 mal zu spät war.<br> Sie fragt Toma: Warst du zu spät in der Schule, weil",
            "en": "Today, Toma was late again.<br> His friend Reda is going to play the question asking game to find out as quickly as possible why Toma was late again.<br> Remember these were the reasons that Toma was late the last eight times.<br>She asks Toma: Were you late for school because",
            "es": "Toma llegó tarde hoy de nuevo.<br>Su amiga Reda le hará algunas preguntas para saber por qué Toma llegó tarde otra vez.<br>Recuerda que estas fueron las razones por las que Toma llegó tarde últimas 8 veces.<br>Reda le preguntó a Toma: ¿Llegaste tarde a la escuela porque",
            "notext": "Index 10"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du etwas nicht finden konntest?",
                    "en": "you couldn’t find something?",
                    "es": "no pudiste encontrar algo?", 
                    "notext": ""
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
                    "de": "du verschlafen hast?",
                    "en": "you slept late?",
                    "es": "dormiste tarde?", 
                    "notext": ""
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
                    "en": "you couldn’t find your bike?",
                    "es": "no podías encontrar tu bicicleta?",
                    "notext": ""

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
                    "en": "you couldn’t find your socks?",
                    "es": "no podías encontrar tus medias?", 
                    "notext": ""
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
                    "en": "you couldn’t find a piece of clothing?",
                    "es": "no podías encontrar una pieza de ropa?",
                    "notext": ""
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
                    "en": "you couldn’t find something?",
                    "es": "no podías encontrar algo?",
                    "notext": ""
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
                    "en": "you couldn’t find a piece of clothing?",
                    "es": "no podías encontrar una pieza de ropa?",
                    "notext": ""
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
                    "de": "du verschlafen hast?",
                    "en": "you slept late?",
                    "es": "dormiste tarde?",
                    "notext": ""
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
            "de": "Das ist Fidi. <br>Fidi nimmt Schwimmunterricht, aber er kommt öfters nicht.<br>Die letzten achtmal hat er den Schwimmunterricht wegen folgender Gründe ausfallen lassen",
            "en": "This is Fidi. <br>Fidi goes to swimming class, but he often misses them.<br>The last eight times he missed his swimming class for the following reasons",
            "es": "Este es Fidi. <br>Él va a clases de natación, pero a menudo falta a clases.<br>El faltó a las últimas 8 clases, por las siguientes razones",
            "notext": "Index 3"
        },
        "text_2": {
            "de": "Fidi kam diese Woche wieder nicht zum Schwimmunterricht.<br>Seine Freundin Kota wird das Fragen Spiel spielen, um so schnell wie möglich herauszufinden warum.<br>Denk daran, das hier sind die Gründe warum Fidi die letzten 8 mal gefehlt hat.<br>Sie fragt Fidi: Bist du nicht zum Schwimmkurs gekommen, weil",
            "en": "Today, Fidi missed his swimming class again.<br>His friend Kota is going to play the question asking game to find out as quickly as possible why Fidi missed the class again.<br> Remember these were the reasons that Fidi missed the class the last eight times.<br>She asks Fidi: Did you miss you swimming class because",
            "es": "Fidi faltó a su clase de natación de nuevo esta semana.<br>Su amiga Kota le hará algunas preguntas para saber por qué Fidi faltó a su clase de natación otra vez.<br>Recuerda que estas fueron las razones por las que Fidi faltó a su clase de natación últimas 8 veces.<br>Kota le preguntó a Fidi: ¿Faltó a clase de natación porque",
            "notext": "Index 4"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du woanders hin gegangen bist?",
                    "en": "you went somewhere else?",
                    "es": "fuiste a otro lugar?",
                    "notext": ""
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
                    "en": "you missed the bus?",
                    "es": "se le fue la guagua?",
                    "notext": ""
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
                    "en": "you went to a birthday party?",
                    "es": "fuiste a una fiesta de cumpleaños?",
                    "notext": ""
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
                    "en": "you took your cat to the animal doctor?",
                    "es": "llevaste a tu gato al veterinario?",
                    "notext": ""
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
                    "de": "du dein Haustier zum Tierarzt gebracht hast?",
                    "en": "you took your pet to the animal doctor?",
                    "es": "fuiste al veterinario?",
                    "notext": ""
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
                    "en": "you went somewhere else?",
                    "es": "fuiste a otro lugar?",
                    "notext": ""
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
                    "de": "du dein Haustier zum Tierarzt gebracht hast?",
                    "en": "you took your pet to the animal doctor?",
                    "es": "fuiste al veterinario?",
                    "notext": ""
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
                    "en": "you missed the bus?",
                    "es": "se le fue la guagua?",
                    "notext": ""
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
            "de": "Das ist Reda. <br>Reda isst ihr Abendessen oft nicht auf.<br>Die letzten achtmal hat sie ihr Abendessen wegen folgender Gründe nicht aufgegessen",
            "en": "This is Reda. <br>Reda often doesn’t finish her dinner.<br>The last eight times she didn’t finish her dinner for the following reasons",
            "es": "Esta es Reda. <br>Reda a menudo no se come toda la comida.<br>Las últimas 8 veces no se comió toda la comida, por las siguientes razones",
            "notext": "Index 24"
        },
        "text_2": {
            "de": "Reda hat ihr Abendessen heute wiedermal nicht aufgegessen.<br>Ihr Freund Miru wird das Fragen Spiel spielen, um so schnell  wie möglich herauszufinden warum.<br>Denk daran, das hier sind die Gründe warum Reda die letzten 8 mal nicht aufgegessen hat.<br>Er fragt Reda: Hast du dein Abendessen nicht aufgegessen, weil",
            "en": "Today, Reda didn’t finish her dinner again.<br>Her friend Miru is going to play the question asking game to find out as quickly as possible why Reda didn't finish her dinner again.<br>Remember these were the reasons that Reda didn’t finish her dinner the last eight times.<br>He asks Reda: Did you not finish your dinner because",
            "es": "Hoy, Reda no se comió toda la comida.<br>Su amiga Miru le hará algunas preguntas para saber por qué Reda no se comió toda la comida otra vez.<br>Recuerda que estas fueron las razones por las que Reda no se comió toda la comida últimas 8 veces.<br>Miru le preguntó a Reda: ¿No se comió todo porque",
            "notext": "Index 25"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du etwas darin nicht magst?",
                    "en": "you didn't like something in your dinner plate?",
                    "es": "no te gustó algo de la comida?",
                    "notext": ""
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
                    "en": "you ate a biscuit and weren't hungry?",
                    "es": "te comiste un biscocho y no tenías hambre?",
                    "notext": ""
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
                    "en": "you didn't like the tomatoes?",
                    "es": "no te gustaban las zanahorias?",
                    "notext": ""
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
                    "en": "you didn't like the peas?",
                    "es": "no te gustaban los vegetales verdes?",
                    "notext": ""
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
                    "en": "you didn't like green vegetables?",
                    "es": "no te gustaban los vegetales verdes?",
                    "notext": ""
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
                    "en": "you didn't like something in your dinner plate?",
                    "es": "no te gustó algo de la comida?",
                    "notext": ""
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
                    "en": "you didn't like green vegetables?",
                    "es": "no te gustaban los vegetales verdes?",
                    "notext": ""
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
                    "en": "you ate a biscuit and weren't hungry?",
                    "es": "te comiste un biscocho y no tenías hambre?",
                    "notext": ""
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
            "de": "Das ist Domu. <br>Domu hat ein Spielzeugauto, aber dieses funktioniert oft nicht.<br>Die letzten achtmal hat Domus Spielzeugauto wegen der folgenden Gründe nicht funktioniert",
            "en": "This is Domu. <br>Domu has a toy car but his toy car is often not working.<br>In the last eight times, Domu’s car was not working for the following reasons", 
            "es": "Esto es Domu. <br>Domu tiene un carro de juguete pero a menudo el carro no funciona.<br>Las últimas 8 veces el carro no funcionó por las siguientes razones", 
            "notext": "Index 6"
        },
        "text_2": {
            "de": "Domus Auto funktioniert wiedermal nicht.<br>Seine Freundin Leli wird das Fragenspiel spielen, um so schnell wie möglich herauszufinden warum.<br>Denk daran, das hier sind die Gründe warum Domus Auto die letzten 8 mal nicht funktioniert hat.<br>Sie fragt Domu: Funktioniert dein Auto nicht, weil",
            "en": "Today, Domu’s toy car is not working again.<br>His friend Leli is going to play the question asking game to find out as quickly as possible why Domu's toy car is not working again.<br> Remember these were the reasons that Domu’s toy car was not working the last eight times.<br>She asks Domu: Is your toy car not working because",
            "es": "El carro de Domu se rompió de nuevo.<br>Su amiga Leli le hará algunas preguntas para saber por qué el carro se rompió otra vez.<br>Recuerda que estas fueron las razones por las que el carro de Domu se rompió las últimas 8 veces.<br>Leli le pregunta a Domu: ¿El carro se rompió porque",
            "notext": "Index 7"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "jemand in deiner Familie es kaputt gemacht hat?",
                    "en": "someone in your family broke it?", 
                    "es": "alguien de tu familia lo rompió?",
                    "notext": ""
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
                    "en": "the batteries ran out?",
                    "es": "se gastaron las baterías?",
                    "notext": ""
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
                    "en": "your mother stepped on it?",
                    "es": "tu mamá lo pisó?",
                    "notext": ""
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
                    "de": "dein Bruder es ins Wasser fallen liess?",
                    "en": "your brother dropped it into water?", 
                    "es": "tu hermano se le cayó al agua?",
                    "notext": ""
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
                    "en": "your sibling broke it?",
                    "es": "tu hermano lo rompió?",
                    "notext": ""
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
                    "en": "someone in your family broke it?",
                    "es": "alguien de tu familia lo rompió?",
                    "notext": ""
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
                    "en": "your sibling broke it?", 
                    "es": "tu hermano lo rompió?",
                    "notext": ""
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
                    "en": "the batteries ran out?", 
                    "es": "se gastaron las baterías?",
                    "notext": ""
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
            "de": "Das ist Mimi. <br>Mimi hat glänzende, weiße Schuhe.<br>Die letzten achtmal waren sie wegen folgender Gründe schmutzig",
            "en": "This is Mimi. <br>Mimi has shiny white shoes but they are often dirty.<br>The last eight times, they were dirty for the following reasons", 
            "es": "Esta es Mimi. <br>Mimi tiene zapatos brillantes, pero frecuentemente están sucios.<br>Las últimas 8 veces estaban sucios por las siguientes razones",
            "notext": "Index 21"
        },
        "text_2": {
            "de": "Mimis Schuhe sind wiedermal schmutzig.<br>Ihr Freund Toma wird das Fragenspiel spielen, um so schnell wie möglich herauszufinden warum.<br>Denk daran, das hier sind die Gründe warum Mimis Schuhe die letzten 8 mal dreckig waren.<br>Er fragt Mimi: Sind deine Schuhe schmutzig, weil",
            "en": "Today, Mimi’s shoes are dirty again.<br>Her friend Toma is going to play the question asking game to find out as quickly as possible why Mimi's shoes are dirty again.<br>Remember these were the reasons that Mimi's shoes were dirty the last eight times. <br>He asks Mimi: Are your shoes dirty because",
            "es": "Los zapatos de Mimi están sucios de nuevo.<br>Su amiga Toma le hará algunas preguntas para saber por qué los zapatos de Mimi están sucios otra vez.<br>Recuerda que estas fueron las razones por las que los zapatos estaban sucios las últimas 8 veces.<br>Toma le pregunta a Mimi: ¿Los zapatos están sucios porque",
            "notext": "Index 22"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "du etwas darauf verschüttet hast?",
                    "en": "you spilled something on them?", 
                    "es": "derramaste algo en los zapatos?",
                    "notext": ""
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
                    "en": "you stepped into the mud?", 
                    "es": "caminaste en el fango?",
                    "notext": ""
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
                    "en": "you spilled paint on them?", 
                    "es": "derramaste pintura en los zapatos?",
                    "notext": ""
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
                    "en": "you spilled tomato juice on them?", 
                    "es": "derramaste jugo de tomate en los zapatos?",
                    "notext": ""
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
                    "en": "you spilled a drink on them?", 
                    "es": "derramaste una bebida en los zapatos?",
                    "notext": ""
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
                    "en": "you spilled something on them?", 
                    "es": "derramaste algo en los zapatos?",
                    "notext": ""
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
                    "en": "you spilled a drink on them?", 
                    "es": "derramaste una bebida en los zapatos?",
                    "notext": ""
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
                    "en": "you stepped into the mud?", 
                    "es": "caminaste en el fango?",
                    "notext": ""
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
            "de": "Das ist Leli. <br>Leli ist ein glückliches Mädchen aber sie weint oft.<br>Die letzten achtmal hat Leli wegen folgender Gründe geweint.",
            "en": "This is Leli. <br>Leli is a happy girl but she cries often.<br>The last eight times Leli was crying for the following reasons", 
            "es": "Esta es Leli. <br>Leli es una niña feliz, pero llora a menudo.<br>Las últimas 8 veces Leli llorró por las siguientes razones",
            "notext": "Index 12"
        },
        "text_2": {
            "de": "Leli weint heute wieder.<br>Ihr Freund Fidi wird das Fragenspiel spielen, um so schnell wie möglich herauszufinden warum.<br>Denk daran, das hier sind die Gründe warum Leli die letzten 8 mal geweint hat.<br>Er fragt Leli: Weinst du, weil",
            "en": "Today, Leli is crying again.<br>Her friend Fidi is going to play the question asking game to find out as quickly as possible why Leli is crying again.<br> Remember these were the reasons that Leli was crying the last eight times.<br>He asks Leli: Are you crying because", 
            "es": "Leli está llorando de nuevo hoy.<br>Su amiga Fidi le hará algunas preguntas para saber por qué Leli está llorando otra vez.<br>Recuerda que estas fueron las razones por las que Leli lloró las últimas 8 veces.<br> Fidi pregunta a Leli: ¿Està llorando por/porque",
            "notext": "Index 13"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "dein Bruder etwas  getan hat?",
                    "en": "of something your brother did?", 
                    "es": "algo que hizo su hermano?",
                    "notext": ""
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
                    "en": "you fell down and hurt yourself?", 
                    "es": "te caíste y te lastimaste?",
                    "notext": ""
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
                    "en": "your brother shouted at you?", 
                    "es": "tu hermano te gritó?",
                    "notext": ""
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
                    "en": "your brother broke your toy horse?", 
                    "es": "tu hermano rompió tu caballo de juguete?",
                    "notext": ""

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
                    "en": "your brother broke one of your toys?", 
                    "es": "tu hermano rompió uno de tus juguetes?",
                    "notext": ""
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
                    "de": "dein Bruder etwas getan hat?",
                    "en": "of something your brother did?", 
                    "es": "algo que hizo tu hermano?",
                    "notext": ""
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
                    "en": "your brother broke one of your toys?", 
                    "es": "tu hermano rompió uno de tus juguetes?",
                    "notext": ""
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
                    "en": "you fell down and hurt yourself?", 
                    "es": "te caíste y te lastimaste?",
                    "notext": ""

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
            "de": "Das ist Kota. <br>Kota liebt es draußen zu spielen.<br>Aber manchmal spielt sie nicht draußen.<br>Die letzten achtmal hat sie wegen folgender Gründe nicht draußen gespielt",
            "en": "This is Kota. <br>Kota loves playing outside.<br>But sometimes she doesn’t play outside.<br>The last eight times she didn’t play outside for the following reasons", 
            "es": "Esta es Kota. <br>A Kota le encanta salir a jugar, pero algunas veces ella no sale a jugar afuera.<br> Las últimas veces Kota no salió a jugar por las siguientes razones",
            "notext": "Index 15"
        },
        "text_2": {
            "de": "Kota hat heute wieder nicht draußen gespielt.<br>Ihr Freund Domu wird das Fragenspiel spielen, um so schnell wie möglich herauszufinden warum.<br> Denk daran, das hier sind die Gründe warum Kota die letzten 8 mal nicht draußen gespielt hat.<br>Er fragt Kota: Wolltest Du  nicht draußen spielen, weil",
            "en": "Today, Kota didn’t play outside again.<br>Her friend Domu is going to play the question asking game to find out as quickly as possible why Kota didn't play outside again.<br> Remember these were reasons that Kota didn't play outside the last eight times.<br>He asks Kota: Did you not play outside because ", 
            "es": "Kota no salió a jugar hoy.<br>Su amiga Domu le hará algunas preguntas para saber por qué Kota no salió a jugar otra vez.<br>Recuerda que estas fueron las razones por las que  Kota no salió a jugar las últimas 8 veces.<br> Domu le preguntó a Kota: ¿No salió a jugar porque",
            "notext": "Index 16"

        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "das Wetter nicht gut war?",
                    "en": "the weather was not right?", 
                    "es": "el clima no estaba bueno?",
                    "notext": ""
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
                    "en": "the playground was closed?", 
                    "es": "el parque estaba cerrado?",
                    "notext": ""
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
                    "en": "it was too hot?", 
                    "es": "había demasiado calor?",
                    "notext": ""
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
                    "en": "it was too windy?", 
                    "es": "había demasiado viento?",
                    "notext": ""
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
                    "en": "it was too cold?", 
                    "es": "había demasiado frío?",
                    "notext": ""
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
                    "en": "the weather was not right?", 
                    "es": "el clima no estaba bueno?",
                    "notext": ""
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
                    "en": "it was too cold?", 
                    "es": "había demasiado frío?",
                    "notext": ""
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
                    "en": "the playground was closed?", 
                    "es": "el parque estaba cerrado?",
                    "notext": ""
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
            "de": "Das ist Tuba. <br>Tuba sieht sich gern Trickfilme an.<br>Aber manchmal sieht er sich keine an.<br>Die letzten achtmal hat er sich wegen folgender Gründe keine Trickfilme angesehen",
            "en": "This is Tuba. <br>Tuba likes to watch cartoons but sometimes he doesn’t watch them.<br>The last eight times Tuba didn't watch cartoons because of the following reasons", 
            "es": "Esto es Tuba. <br>A Tuba le encanta ver muñequitos, pero a veces no los ve.<br>Las últimas 8 veces, tuba no vio muñequitos por las siguientes razones",
            "notext": "Index 18"
        },
        "text_2": {
            "de": "Heute hat Tuba keine Trickfilme geschaut.<br>Seine Freundin Mimi wird das Fragenspiel spielen, um so schnell wie möglich herauszufinden warum.<br>Denk daran, das hier sind die Gründe warum er die letzten 8 mal keine Trickfilme geschaut hat.<br>Mimi fragt Tuba: Hast du heute keine Trickfilme geschaut, weil",
            "en": "Today, Tuba didn't watch cartoons again.<br>His friend Mimi is going to play the question asking game to find out as quickly as possible why Tuba didn't watch cartoons today again.<br>Remember these were reasons that Tuba didn't watch cartoons the last eight times.<br>She asks Tuba: Did you not watch cartoons today because", 
            "es": "Hoy Tuba tampoco vio muñequitos.<br>Su amiga Mimi le hará algunas preguntas para saber por qué tuba no vio los muñequitos otra vez.<br>Recuerda que estas fueron las razones por las que Tuba no vio los muñequitos las últimas 8 veces. <br>MiMi le preguntó a Tuba: ¿No viste muñequitos porque",
            "notext": "Index 19"
        },
        "questions": [
            {
                "id": 1,
                "text": {
                    "de": "jemand anderes etwas angeschaut hat?",
                    "en": "you watched something else?", 
                    "es": "porque viste otra cosa en la TV?",
                    "notext": ""
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
                    "en": "you played outside instead?", 
                    "es": "porque fuiste al parque a jugar?",
                    "notext": ""
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
                    "de": "deine Mutter einen Film angeschaut hat?",
                    "en": "you watched a film?", 
                    "es": "porque viste una película en la TV?",
                    "notext": ""
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
                    "de": "dein Vater Tennis angeschaut hat?",
                    "en": "you watched tennis on TV?",
                    "es": "porque viste un juego de tenis en la TV?",
                    "notext": ""
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
                    "de": "dein Vater etwas anderes angeschaut hat?",
                    "en": "you watched sports on TV?", 
                    "es": "porque viste deporte en la TV?",
                    "notext": ""
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
                    "de": "jemand anderes etwas angeschaut hat?",
                    "en": "you watched something else?",
                    "es": "porque viste otra cosa en la TV?",
                    "notext": ""
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
                    "de": "dein Vater Sport geguckt hat?",
                    "en": "you watched sports on TV?",
                    "es": "porque viste deporte en la TV?",
                    "notext": ""
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
                    "en": "you played outside instead?",
                    "es": "porque fuiste al parque a jugar?",
                    "notext": ""
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