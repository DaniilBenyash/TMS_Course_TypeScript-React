// 1. Протипизировать входные данные
// 2. Вывести в строку названия программ у которых нет точного времени в расписании
// и протипизировать функцию
// 3. Вывести массив из названий всех жанров для всех тв шоу
// 4. Найти шоу с наибольшим количеством жанров (genres), если их несколько вывести несколько через запятую
// 5. Найти самую раннюю даты премьеры представленных тв шоу (premiered) и определить какой это был день недели

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.
interface ILink {
    'self': {
        'href': string
    },
    'previousepisode': {
        'href': string
    },
    'nextepisode'?: {
        'href': string
    }
}
interface IExternal{
    'tvrage': null, 
    'thetvdb': number, 
    'imdb': string
}
interface IWebChannel {
    'id': number,
    'name': string,
    'country': {
        'name': string,
        'code': string,
        'timezone': string
    },
    'officialSite': string | null,
}

interface INetwork {
    'id': number,
    'name': string,
    'country': {
        'name': string,
        'code': string,
        'timezone': string
    },
    'officialSite': null,
}

interface IEmbedded {
    'show': {
        'id': number,
        'url': string,
        'name': string,
        'type': string,
        'language': string,
        'genres': string[],
        'status': string,
        'runtime': number,
        'averageRuntime': number,
        'premiered': string,
        'ended': string | null,
        'officialSite': string,
        'schedule': {'time': string, 'days': string[]},
        'rating': {'average': number | null},
        'weight': number,
        'network': INetwork,
        'webChannel': IWebChannel,
        'dvdCountry': null,
        'externals': IExternal,
        'image': {'medium': string,'original': string,},
        'summary': string,
        'updated': number,
        '_links': ILink,
    },
}
interface ISchedule {
    'id': number,
    'url': string,
    'name': string,
    'season': number,
    'number': number,
    'type': string,
    'airdate': string,
    'airtime': string,
    'airstamp': string,
    'runtime': number,
    'rating': {'average': number | null},
    'image': {'medium': string, 'original': string,} | null
    'summary': string,
    '_links': {'self': {'href': string, 'previousepisode'?: string}},
    '_embedded': IEmbedded
}
const schedule: ISchedule[] = [
    {
        'id': 1843172,
        'url': 'https://www.tvmaze.com/episodes/1843172/puppy-dog-pals-3x27-keias-birthday-balloon-bash',
        'name': 'Keia\'s Birthday Balloon Bash',
        'season': 3,
        'number': 27,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '09:00',
        'airstamp': '2020-05-29T13:00:00+00:00',
        'runtime': 15,
        'rating': {'average': null},
        'image': null,
        'summary': '<p>Bingo and Rolly go on a mission to find a special balloon for Keia\'s birthday party.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1843172'}},
        '_embedded': {
            'show': {
                'id': 26341,
                'url': 'https://www.tvmaze.com/shows/26341/puppy-dog-pals',
                'name': 'Puppy Dog Pals',
                'type': 'Animation',
                'language': 'English',
                'genres': ['Comedy', 'Children'],
                'status': 'Running',
                'runtime': 15,
                'averageRuntime': 15,
                'premiered': '2017-04-14',
                'ended': null,
                'officialSite': 'https://disneynow.com/shows/puppy-dog-pals',
                'schedule': {'time': '08:30', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 72,
                'network': {
                    'id': 78,
                    'name': 'Disney Channel',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'webChannel': {
                    'id': 83,
                    'name': 'DisneyNOW',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 325978, 'imdb': 'tt6688750'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/136/342487.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/136/342487.jpg',
                },
                'summary': '<p><b>Puppy Dog Pals </b>is about fun-loving pug puppies, brothers Bingo and Rolly, have thrill-seeking appetites that take them on exhilarating adventures in their neighborhood and around the globe. Whether helping their owner Bob or assisting a friend in need, the pugs\' motto is that life is more exciting with your best friend by your side. Each episode features two 11-minute stories that showcase Bingo and Rolly\'s similarities and differences while demonstrating positive lessons about friendship, problem-solving, collaboration, creativity and adventure.</p>',
                'updated': 1647096494,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/26341'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2280337'},
                },
            },
        },
    }, {
        'id': 1856870,
        'url': 'https://www.tvmaze.com/episodes/1856870/harley-quinn-2x09-bachelorette',
        'name': 'Bachelorette',
        'season': 2,
        'number': 9,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '09:00',
        'airstamp': '2020-05-29T13:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 7.9},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/257/644822.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/257/644822.jpg',
        },
        'summary': '<p>It\'s Bachelor/Bachelorette weekend for Ivy and Kite Man.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856870'}},
        '_embedded': {
            'show': {
                'id': 33452,
                'url': 'https://www.tvmaze.com/shows/33452/harley-quinn',
                'name': 'Harley Quinn',
                'type': 'Animation',
                'language': 'English',
                'genres': ['Comedy', 'Action', 'Crime'],
                'status': 'Running',
                'runtime': 30,
                'averageRuntime': 28,
                'premiered': '2019-11-29',
                'ended': null,
                'officialSite': 'https://www.dcuniverse.com/videos/harley-quinn/193',
                'schedule': {'time': '', 'days': ['Friday']},
                'rating': {'average': 7.7},
                'weight': 97,
                'network': null,
                'webChannel': {
                    'id': 329,
                    'name': 'HBO Max',
                    'country': null,
                    'officialSite': 'https://www.hbomax.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 365677, 'imdb': 'tt7658402'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/247/618564.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/247/618564.jpg',
                },
                'summary': '<p><b>Harley Quinn</b>, based on the DC characters, focuses on Harley Quinn who has finally broken things off once and for all with the Joker and attempts to make it on her own as the criminal Queenpin of Gotham City. The series features Harley Quinn, Poison Ivy and a whole cast of heroes and villains, old and new, from the DC Universe.</p>',
                'updated': 1631370002,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/33452'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1865214'},
                },
            },
        },
    }, {
        'id': 1843173,
        'url': 'https://www.tvmaze.com/episodes/1843173/puppy-dog-pals-3x28-hide-and-go-sleep',
        'name': 'Hide-and-Go Sleep',
        'season': 3,
        'number': 28,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '09:15',
        'airstamp': '2020-05-29T13:15:00+00:00',
        'runtime': 15,
        'rating': {'average': null},
        'image': null,
        'summary': '<p>When the pugs\' cousin, Cody, goes missing during a game of hide-and-seek, Bingo and Rolly must find him before his family comes to pick him up.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1843173'}},
        '_embedded': {
            'show': {
                'id': 26341,
                'url': 'https://www.tvmaze.com/shows/26341/puppy-dog-pals',
                'name': 'Puppy Dog Pals',
                'type': 'Animation',
                'language': 'English',
                'genres': ['Comedy', 'Children'],
                'status': 'Running',
                'runtime': 15,
                'averageRuntime': 15,
                'premiered': '2017-04-14',
                'ended': null,
                'officialSite': 'https://disneynow.com/shows/puppy-dog-pals',
                'schedule': {'time': '08:30', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 72,
                'network': {
                    'id': 78,
                    'name': 'Disney Channel',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'webChannel': {
                    'id': 83,
                    'name': 'DisneyNOW',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 325978, 'imdb': 'tt6688750'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/136/342487.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/136/342487.jpg',
                },
                'summary': '<p><b>Puppy Dog Pals </b>is about fun-loving pug puppies, brothers Bingo and Rolly, have thrill-seeking appetites that take them on exhilarating adventures in their neighborhood and around the globe. Whether helping their owner Bob or assisting a friend in need, the pugs\' motto is that life is more exciting with your best friend by your side. Each episode features two 11-minute stories that showcase Bingo and Rolly\'s similarities and differences while demonstrating positive lessons about friendship, problem-solving, collaboration, creativity and adventure.</p>',
                'updated': 1647096494,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/26341'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2280337'},
                },
            },
        },
    }, {
        'id': 1876125,
        'url': 'https://www.tvmaze.com/episodes/1876125/off-topic-2020-05-29-im-deep-in-the-awful-off-topic-235',
        'name': 'I\'m Deep In The Awful - Off Topic - #235',
        'season': 2020,
        'number': 21,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 120,
        'rating': {'average': null},
        'image': null,
        'summary': null,
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1876125'}},
        '_embedded': {
            'show': {
                'id': 18752,
                'url': 'https://www.tvmaze.com/shows/18752/off-topic',
                'name': 'Off Topic',
                'type': 'Talk Show',
                'language': 'English',
                'genres': ['Comedy'],
                'status': 'Running',
                'runtime': 120,
                'averageRuntime': 120,
                'premiered': '2015-12-06',
                'ended': null,
                'officialSite': 'https://roosterteeth.com/series/off-topic-the-achievement-hunter-podcast',
                'schedule': {'time': '', 'days': ['Sunday']},
                'rating': {'average': null},
                'weight': 28,
                'network': null,
                'webChannel': {
                    'id': 32,
                    'name': 'Rooster Teeth',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 310336, 'imdb': 'tt6468694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/64/161570.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/64/161570.jpg',
                },
                'summary': '<p>The lads and lasses of Achievement Hunter congregate each week to discuss the important questions in life. Plus drink beer.</p>',
                'updated': 1631187730,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/18752'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2165968'},
                },
            },
        },
    }, {
        'id': 1813386,
        'url': 'https://www.tvmaze.com/episodes/1813386/ramy-2x01-bayah',
        'name': 'Bay\'ah',
        'season': 2,
        'number': 1,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 8.3},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647642.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647642.jpg',
        },
        'summary': '<p>Bro...You want real love? commit to the right person. take the bay\'ah.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1813386'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856648,
        'url': 'https://www.tvmaze.com/episodes/1856648/ramy-2x02-can-you-hear-me-now',
        'name': 'Can You Hear Me Now?',
        'season': 2,
        'number': 2,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 8},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647643.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647643.jpg',
        },
        'summary': '<p>Hey i\'m starting to think those guys at Verizon had a point.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856648'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856649,
        'url': 'https://www.tvmaze.com/episodes/1856649/ramy-2x03-little-omar',
        'name': 'Little Omar',
        'season': 2,
        'number': 3,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 8.5},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647644.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647644.jpg',
        },
        'summary': '<p>He told you about little Omar. stop acting like you didn\'t know. now you gotta explain this dog to your parents?? it\'s haraam. you\'re just - haraam.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856649'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856650,
        'url': 'https://www.tvmaze.com/episodes/1856650/ramy-2x04-miakhalifamov',
        'name': 'Miakhalifa.mov',
        'season': 2,
        'number': 4,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 8},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647645.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647645.jpg',
        },
        'summary': '<p>You dress like a skateboarder - but you don\'t know how to skateboard?</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856650'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856651,
        'url': 'https://www.tvmaze.com/episodes/1856651/ramy-2x05-3riana-grande',
        'name': '3riana Grande',
        'season': 2,
        'number': 5,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 4.5},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647646.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647646.jpg',
        },
        'summary': '<p>the shower keeps getting clogged. my feet are just sitting in a puddle of my sweaty body water... you ever feel that? like, you took a shower, but you feel like you still gotta wash your feet?</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856651'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856652,
        'url': 'https://www.tvmaze.com/episodes/1856652/ramy-2x06-they',
        'name': 'They',
        'season': 2,
        'number': 6,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 4.5},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647647.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647647.jpg',
        },
        'summary': '<p>Pray two rakat for Ruther Bader Ginsburg.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856652'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856653,
        'url': 'https://www.tvmaze.com/episodes/1856653/ramy-2x07-atlantic-city',
        'name': 'Atlantic City',
        'season': 2,
        'number': 7,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': null},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647648.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647648.jpg',
        },
        'summary': '<p>do not go to a magic show. david blaine is straight up jinn.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856653'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856654,
        'url': 'https://www.tvmaze.com/episodes/1856654/ramy-2x08-frank-in-the-future',
        'name': 'Frank in the Future',
        'season': 2,
        'number': 8,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': null},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647649.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647649.jpg',
        },
        'summary': '<p>masr um el dunya… and it always will be. but america is what I need right now. you\'ll see, baba. inshallah.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856654'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856655,
        'url': 'https://www.tvmaze.com/episodes/1856655/ramy-2x09-uncle-naseem',
        'name': 'Uncle Naseem',
        'season': 2,
        'number': 9,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': null},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647650.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647650.jpg',
        },
        'summary': '<p>yes. mexicans can go to heaven</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856655'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1856656,
        'url': 'https://www.tvmaze.com/episodes/1856656/ramy-2x10-you-are-naked-in-front-of-your-sheikh',
        'name': 'You Are Naked in Front of Your Sheikh',
        'season': 2,
        'number': 10,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 30,
        'rating': {'average': 4.5},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/259/647651.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/259/647651.jpg',
        },
        'summary': '<p>can we just pray together?</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856656'}},
        '_embedded': {
            'show': {
                'id': 36563,
                'url': 'https://www.tvmaze.com/shows/36563/ramy',
                'name': 'Ramy',
                'type': 'Scripted',
                'language': 'English',
                'genres': ['Drama', 'Comedy', 'Family'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2019-04-19',
                'ended': null,
                'officialSite': 'https://www.hulu.com/series/ramy-4bcb6c3a-3d9a-4d49-b8e0-57fb7de9c8d6',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': 4.9},
                'weight': 94,
                'network': null,
                'webChannel': {
                    'id': 2,
                    'name': 'Hulu',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.hulu.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 359257, 'imdb': 'tt7649694'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/392/980930.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/392/980930.jpg',
                },
                'summary': '<p>Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks life is a moral test and a millennial generation that believes life has no consequences. Through it all, he\'s still trying to do the things that most 20-somethings do, like date. He is essentially a guy who is torn between praying on Fridays and going to parties on Friday nights. Which side will win out in this seemingly endless internal battle?</p>',
                'updated': 1643096502,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/36563'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1856656'},
                },
            },
        },
    }, {
        'id': 1876150,
        'url': 'https://www.tvmaze.com/episodes/1876150/gourmet-makes-1x45-pastry-chef-remakes-gourmet-pop-tarts-at-home',
        'name': 'Pastry Chef Remakes Gourmet Pop Tarts at Home',
        'season': 1,
        'number': 45,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': 37,
        'rating': {'average': null},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/377/944574.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/377/944574.jpg',
        },
        'summary': '<p>No, you didn\'t misread the title. Pastry Chef Claire Saffitz has returned to one of her earlier gourmet conquests: Pop Tarts. This time, she\'s making a simplified version of her original gourmet Pop Tarts so that anybody can make them from home using common kitchen equipment. </p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1876150'}},
        '_embedded': {
            'show': {
                'id': 40230,
                'url': 'https://www.tvmaze.com/shows/40230/gourmet-makes',
                'name': 'Gourmet Makes',
                'type': 'Reality',
                'language': 'English',
                'genres': ['Food'],
                'status': 'Ended',
                'runtime': null,
                'averageRuntime': 30,
                'premiered': '2017-07-18',
                'ended': '2020-05-29',
                'officialSite': 'https://video.bonappetit.com/series/gourmet-makes',
                'schedule': {'time': '', 'days': []},
                'rating': {'average': null},
                'weight': 30,
                'network': null,
                'webChannel': {
                    'id': 303,
                    'name': 'bon appétit video',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 352888, 'imdb': 'tt10162630'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/377/944575.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/377/944575.jpg',
                },
                'summary': '<p>Claire Saffitz attempts to recreate our favorite junk and comfort foods, such as gushers and Twinkies, in the BA Test kitchen. Chef Saffitz will begin taking the necessary steps to turn your childhood snacks into culinary masterpieces.</p>',
                'updated': 1640423493,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/40230'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/1876150'},
                },
            },
        },
    }, {
        'id': 1876153,
        'url': 'https://www.tvmaze.com/episodes/1876153/comedy-central-stand-up-featuring-6x07-kellen-erskine-its-weird-that-we-love-costco-so-much',
        'name': 'Kellen Erskine - It\'s Weird That We Love Costco So Much',
        'season': 6,
        'number': 7,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': null,
        'rating': {'average': null},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/378/946840.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/378/946840.jpg',
        },
        'summary': '<p>Kellen Erskine urges everyone to return their shopping carts and explains the appeal of Costco Wholesale.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1876153'}},
        '_embedded': {
            'show': {
                'id': 40862,
                'url': 'https://www.tvmaze.com/shows/40862/comedy-central-stand-up-featuring',
                'name': 'Comedy Central Stand-Up Featuring',
                'type': 'Variety',
                'language': 'English',
                'genres': ['Comedy'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': null,
                'premiered': '2019-01-11',
                'ended': null,
                'officialSite': 'http://www.cc.com/shows/comedy-central-stand-up-featuring',
                'schedule': {'time': '', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 32,
                'network': null,
                'webChannel': {
                    'id': 73,
                    'name': 'CC: Studios',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 358389, 'imdb': null},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/378/946750.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/378/946750.jpg',
                },
                'summary': '<p>Get your stand-up fix from today\'s freshest young comedians as Comedy Central introduces you to up-and-coming comics, who are serving up quick hits of their sets.</p>',
                'updated': 1647189984,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/40862'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2294473'},
                },
            },
        },
    }, {
        'id': 1876154,
        'url': 'https://www.tvmaze.com/episodes/1876154/comedy-central-stand-up-featuring-6x08-sydnee-washington-women-need-a-lot-of-things-to-have-an-orgasm',
        'name': 'Sydnee Washington - Women Need a Lot of Things to Have an Orgasm',
        'season': 6,
        'number': 8,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': null,
        'rating': {'average': null},
        'image': {
            'medium': 'https://static.tvmaze.com/uploads/images/medium_landscape/378/946841.jpg',
            'original': 'https://static.tvmaze.com/uploads/images/original_untouched/378/946841.jpg',
        },
        'summary': '<p>Sydnee Washington disappoints the straight men in her audience and lists all the things she needs to feel relaxed enough to orgasm.</p>',
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1876154'}},
        '_embedded': {
            'show': {
                'id': 40862,
                'url': 'https://www.tvmaze.com/shows/40862/comedy-central-stand-up-featuring',
                'name': 'Comedy Central Stand-Up Featuring',
                'type': 'Variety',
                'language': 'English',
                'genres': ['Comedy'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': null,
                'premiered': '2019-01-11',
                'ended': null,
                'officialSite': 'http://www.cc.com/shows/comedy-central-stand-up-featuring',
                'schedule': {'time': '', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 32,
                'network': null,
                'webChannel': {
                    'id': 73,
                    'name': 'CC: Studios',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 358389, 'imdb': null},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/378/946750.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/378/946750.jpg',
                },
                'summary': '<p>Get your stand-up fix from today\'s freshest young comedians as Comedy Central introduces you to up-and-coming comics, who are serving up quick hits of their sets.</p>',
                'updated': 1647189984,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/40862'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2294473'},
                },
            },
        },
    }, {
        'id': 2287968,
        'url': 'https://www.tvmaze.com/episodes/2287968/the-at-home-variety-show-1x15-andy-cohen-chelsea-handler-play-truth-or-donation',
        'name': 'Andy Cohen & Chelsea Handler Play Truth or Donation',
        'season': 1,
        'number': 15,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '',
        'airstamp': '2020-05-29T16:00:00+00:00',
        'runtime': null,
        'rating': {'average': null},
        'image': null,
        'summary': null,
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/2287968'}},
        '_embedded': {
            'show': {
                'id': 48492,
                'url': 'https://www.tvmaze.com/shows/48492/the-at-home-variety-show',
                'name': 'The At-Home Variety Show',
                'type': 'Variety',
                'language': 'English',
                'genres': ['Comedy'],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': null,
                'premiered': '2020-05-11',
                'ended': null,
                'officialSite': null,
                'schedule': {
                    'time': '',
                    'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                },
                'rating': {'average': null},
                'weight': 67,
                'network': null,
                'webChannel': {
                    'id': 347,
                    'name': 'Peacock',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': 'https://www.peacocktv.com/',
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 383925, 'imdb': 'tt12305028'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/268/670894.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/268/670894.jpg',
                },
                'summary': '<p>Featuring Seth MacFarlane, <b>The At-Home Variety Show</b> is a daily short-form series featuring some of the biggest stars from NBCUniversal and beyond to help support essential workers and communities most in need.</p>',
                'updated': 1646283057,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/48492'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2287972'},
                },
            },
        },
    }, {
        'id': 1875386,
        'url': 'https://www.tvmaze.com/episodes/1875386/titan-fc-2020-05-29-titan-fc-60-cavalcante-vs-manfio',
        'name': 'Titan FC 60: Cavalcante vs. Manfio',
        'season': 2020,
        'number': 2,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '22:00',
        'airstamp': '2020-05-30T02:00:00+00:00',
        'runtime': 120,
        'rating': {'average': null},
        'image': null,
        'summary': null,
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1875386'}},
        '_embedded': {
            'show': {
                'id': 16665,
                'url': 'https://www.tvmaze.com/shows/16665/titan-fc',
                'name': 'Titan FC',
                'type': 'Sports',
                'language': 'English',
                'genres': [],
                'status': 'Running',
                'runtime': null,
                'averageRuntime': 102,
                'premiered': '2006-03-11',
                'ended': null,
                'officialSite': 'http://www.titanfighting.com',
                'schedule': {'time': '', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 3,
                'network': null,
                'webChannel': {
                    'id': 45,
                    'name': 'UFC Fight Pass',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': null, 'imdb': null},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/401/1004265.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/401/1004265.jpg',
                },
                'summary': '<p>Titan Fighting Championship is an American mixed martial arts promotion based out of Pompano Beach, FL. Their shows were originally run in and near Kansas City and have since expanded to include venues all over North America and eventually, international locations.</p>',
                'updated': 1648431696,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/16665'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2303099'},
                },
            },
        },
    }, {
        'id': 1856659,
        'url': 'https://www.tvmaze.com/episodes/1856659/205-live-2020-05-29-205-live-183',
        'name': '205 Live #183',
        'season': 2020,
        'number': 22,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '22:00',
        'airstamp': '2020-05-30T02:00:00+00:00',
        'runtime': 60,
        'rating': {'average': null},
        'image': null,
        'summary': null,
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1856659'}},
        '_embedded': {
            'show': {
                'id': 22536,
                'url': 'https://www.tvmaze.com/shows/22536/205-live',
                'name': '205 Live',
                'type': 'Sports',
                'language': 'English',
                'genres': [],
                'status': 'Ended',
                'runtime': 60,
                'averageRuntime': 60,
                'premiered': '2016-11-29',
                'ended': '2022-04-22',
                'officialSite': 'https://www.wwe.com/shows/wwe-205-live',
                'schedule': {'time': '22:00', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 71,
                'network': null,
                'webChannel': {
                    'id': 15,
                    'name': 'WWE Network',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 323420, 'imdb': 'tt6286394'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/96/240881.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/96/240881.jpg',
                },
                'summary': '<p><i>WWE 205 Live</i>, also simply called <b>205 Live</b>, is a live professional wrestling WWE Network series produced by WWE, which exclusively features the promotion\'s cruiserweight division, wherein all participants are billed at a weight of 205 lbs. or less.</p>',
                'updated': 1647004590,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/22536'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2293203'},
                    'nextepisode': {'href': 'https://api.tvmaze.com/episodes/2293204'},
                },
            },
        },
    }, {
        'id': 1894523,
        'url': 'https://www.tvmaze.com/episodes/1894523/the-last-drive-in-with-joe-bob-briggs-7x11-dead-heat',
        'name': 'Dead Heat',
        'season': 7,
        'number': 11,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '23:00',
        'airstamp': '2020-05-30T03:00:00+00:00',
        'runtime': 120,
        'rating': {'average': null},
        'image': null,
        'summary': null,
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1894523'}},
        '_embedded': {
            'show': {
                'id': 45090,
                'url': 'https://www.tvmaze.com/shows/45090/the-last-drive-in-with-joe-bob-briggs',
                'name': 'The Last Drive-In with Joe Bob Briggs',
                'type': 'Variety',
                'language': 'English',
                'genres': ['Comedy', 'Fantasy', 'Horror'],
                'status': 'Running',
                'runtime': 120,
                'averageRuntime': 121,
                'premiered': '2018-07-13',
                'ended': null,
                'officialSite': 'https://www.shudder.com/series/watch/the-last-drive-in-with-joe-bob-briggs/4863686',
                'schedule': {'time': '', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 79,
                'network': null,
                'webChannel': {
                    'id': 213,
                    'name': 'Shudder',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 350354, 'imdb': 'tt8865058'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/224/562046.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/224/562046.jpg',
                },
                'summary': '<p>Proving once again that "the drive-in will never die," iconic horror host and exploitation movie aficionado Joe Bob Briggs is back with an all-new Shudder Original series, hosting weekly Friday night double features streaming live exclusively on Shudder. Every week, The Last Drive-In series offers an eclectic pairing of films, with selections ranging across five decades and running the gamut from horror classics to obscurities and foreign cult favorites. And from time to time, special surprise guests will drop in on Joe Bob and Darcy the Mail Girl.</p>',
                'updated': 1646680321,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/45090'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2290606'},
                },
            },
        },
    }, {
        'id': 1894524,
        'url': 'https://www.tvmaze.com/episodes/1894524/the-last-drive-in-with-joe-bob-briggs-7x12-cannibal-holocaust',
        'name': 'Cannibal Holocaust',
        'season': 7,
        'number': 12,
        'type': 'regular',
        'airdate': '2020-05-29',
        'airtime': '23:00',
        'airstamp': '2020-05-30T03:00:00+00:00',
        'runtime': 120,
        'rating': {'average': null},
        'image': null,
        'summary': null,
        '_links': {'self': {'href': 'https://api.tvmaze.com/episodes/1894524'}},
        '_embedded': {
            'show': {
                'id': 45090,
                'url': 'https://www.tvmaze.com/shows/45090/the-last-drive-in-with-joe-bob-briggs',
                'name': 'The Last Drive-In with Joe Bob Briggs',
                'type': 'Variety',
                'language': 'English',
                'genres': ['Comedy', 'Fantasy', 'Horror'],
                'status': 'Running',
                'runtime': 120,
                'averageRuntime': 121,
                'premiered': '2018-07-13',
                'ended': null,
                'officialSite': 'https://www.shudder.com/series/watch/the-last-drive-in-with-joe-bob-briggs/4863686',
                'schedule': {'time': '', 'days': ['Friday']},
                'rating': {'average': null},
                'weight': 79,
                'network': null,
                'webChannel': {
                    'id': 213,
                    'name': 'Shudder',
                    'country': {
                        'name': 'United States',
                        'code': 'US',
                        'timezone': 'America/New_York'
                    },
                    'officialSite': null,
                },
                'dvdCountry': null,
                'externals': {'tvrage': null, 'thetvdb': 350354, 'imdb': 'tt8865058'},
                'image': {
                    'medium': 'https://static.tvmaze.com/uploads/images/medium_portrait/224/562046.jpg',
                    'original': 'https://static.tvmaze.com/uploads/images/original_untouched/224/562046.jpg',
                },
                'summary': '<p>Proving once again that "the drive-in will never die," iconic horror host and exploitation movie aficionado Joe Bob Briggs is back with an all-new Shudder Original series, hosting weekly Friday night double features streaming live exclusively on Shudder. Every week, The Last Drive-In series offers an eclectic pairing of films, with selections ranging across five decades and running the gamut from horror classics to obscurities and foreign cult favorites. And from time to time, special surprise guests will drop in on Joe Bob and Darcy the Mail Girl.</p>',
                'updated': 1646680321,
                '_links': {
                    'self': {'href': 'https://api.tvmaze.com/shows/45090'},
                    'previousepisode': {'href': 'https://api.tvmaze.com/episodes/2290606'},
                },
            },
        },
    }]

// 2.

function getNamesWithoutSchedule(schedule: ISchedule[]): string {

    let names: string = '';

    schedule.forEach(el => {

        if(el._embedded.show.schedule.time.length === 0){

            names += el._embedded.show.name + ', '
        } 
    })

    return names.slice(0, names.length-2)
}

// 3.

function getGenresAllTVShow(schedule: ISchedule[]): string[]{

    const genres: string[][] = [];

    schedule.forEach(el => {
        genres.push(el._embedded.show.genres)
    })

    return genres.flat(1)
}

// 4.

function getTVShow(schedule: ISchedule[]): string{

    let tvShow: string = '';
    let numberGenres: number = 0;

    schedule.forEach(el => {

        if(numberGenres < el._embedded.show.genres.length){

            numberGenres = el._embedded.show.genres.length;
            tvShow = el._embedded.show.name + ', ';

        }else if(numberGenres === el._embedded.show.genres.length){
            
            tvShow += el._embedded.show.name + ', ';
        }
    })

    return tvShow.slice(0, tvShow.length-2)
}

// 5. 

function getEarliestDate(schedule: ISchedule[]): string{

    let date:string = '';

        schedule.forEach(el => {

            if(date === ''){

                date = el._embedded.show.premiered

            }else if(new Date(date).getTime() > new Date(el._embedded.show.premiered).getTime()){

                date = el._embedded.show.premiered
            }
        })
    
    const week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

    let day = week[new Date(date).getDay()];

    return date + ': ' + day
}

console.log(getNamesWithoutSchedule(schedule));
console.log(getGenresAllTVShow(schedule));
console.log(getTVShow(schedule));
console.log(getEarliestDate(schedule));

