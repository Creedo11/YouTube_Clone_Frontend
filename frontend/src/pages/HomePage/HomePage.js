import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY";
import VidMapper from "../../components/VidMapper";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  
//   const [user, token] = useAuth();
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>Home Page for {user.username}!</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div>
//   );
// };

  const [videos, setVideos] = useState([{
            "kind": "youtube#searchResult",
            "etag": "EiitSkr7VrfZHSFwX4-DgmMIh4c",
            "id": {
                "kind": "youtube#video",
                "videoId": "bqSgbSmrJdk"
            },
            "snippet": {
                "publishedAt": "2021-11-05T17:22:25Z",
                "channelId": "UCNcdbMyA59zE-Vk668bKWOg",
                "title": "Spidey's Best Moments! | Compilation | Marvel's Spidey and His Amazing Friends | @Disney Junior",
                "description": "Go webs go! Watch Spidey, Ghost Spider and Spin save the day in these best moments! \n\n\"Marvel's Spidey and his Amazing Friends\" tells the story of Peter Parker, Miles Morales and Gwen Stacy, who together form Team Spidey and embark on heroic adventures to protect their community. Geared towards preschoolers and their families, the series models the importance of teamwork and helping others and highlights themes of friendship, cooperation and problem-solving.\n\nWatch Marvel's Spidey and his Amazing Friends  on Disney Junior and in DisneyNOW! And check out more videos here: https://youtube.com/playlist?list=PL2m1vjiMH_hPWdn-sLqLlYbVh2QAcjHFd\n\n#spideyandhisamazingfriends #disneyjunior",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bqSgbSmrJdk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bqSgbSmrJdk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bqSgbSmrJdk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/bqSgbSmrJdk/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/bqSgbSmrJdk/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Disney Junior",
                "liveBroadcastContent": "none",
                "publishTime": "2021-11-05T17:22:25Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ziYjf1MBtwneeIOE1lyYRSUGEzs",
            "id": {
                "kind": "youtube#video",
                "videoId": "a5_8PFzEhB0"
            },
            "snippet": {
                "publishedAt": "2021-09-23T23:20:28Z",
                "channelId": "UC5N2asRYkdATmJ9dtr1fO1w",
                "title": "Into The Spiderverse: Doc Ock Revealed (MOVIE SCENE) | With Captions",
                "description": "Watch now via the links below.\nWatch now in US https://bit.ly/LSPRDMISUS\nWatch now in Canada https://bit.ly/LSPRMISCA\nWatch now in UK: https://bit.ly/LSPRDMISUK\nWatch now in Ireland: https://bit.ly/LSPRDMISIE\nWatch now in Australia https://bit.ly/LSPRMISAUS\nWatch now in New Zealand https://bit.ly/LSPRDMISNZ\n\nSpider-Man: Into The Spider-Verse / Spider-Man: Into the Spider-Verse” introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask. / Phil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that's the first of its kind. Spider-Man: Into the Spider-Verse introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.\n\nScene City / If you like movies, kick your feet up and hang out at Scene City where the best scenes from the best movies live!\n\nWe rekindle the love for your childhood classics, relive the unforgettable moments, and share movie secrets you might not have known about.\n\nJoin the community for a watch party from standalone movie clips, lists and compilations to five minute breakdowns to get the low-down on all things movies!\n\nWhether you’re a movie connoisseur or a passerby, Scene City is your spot to watch clips, flicks, and chill.\n\nChased by Doc Ock, Peter teaches Miles how to tap into his Spider-Man abilities as they escape through the forest.\n\n#IntoTheSpiderVerse #SpiderManIntoTheSpiderverse #SpiderMan",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/a5_8PFzEhB0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/a5_8PFzEhB0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/a5_8PFzEhB0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/a5_8PFzEhB0/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/a5_8PFzEhB0/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Scene City",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-23T23:20:28Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BBUzS_6gHekBQOvq2LoMnlQAgWw",
            "id": {
                "kind": "youtube#video",
                "videoId": "lI_mqAJ71dw"
            },
            "snippet": {
                "publishedAt": "2021-12-05T01:19:44Z",
                "channelId": "UCA0MDADBWmCFro3SXR5mlSg",
                "title": "SPIDER-MAN: Across the Spider-Verse Trailer (2023) Into The Spider-Verse 2",
                "description": "Watch the official trailer for Spider-Man: Across the Spider-Verse, an animation movie starring Shameik Moore and Hailee Steinfeld. In theaters June 2, 2023.\n\nMiles Morales returns for the next chapter of the Oscar®-winning Spider-Verse saga, an epic adventure that will transport Brooklyn’s full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team of Spider-People to face off with a villain more powerful than anything they have ever encountered.\n\n© Sony Pictures",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lI_mqAJ71dw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lI_mqAJ71dw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lI_mqAJ71dw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/lI_mqAJ71dw/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/lI_mqAJ71dw/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Entertainment Access",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-05T01:19:44Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "KGtLRTOY4oGWiuvajBfU1N7oJKo",
            "id": {
                "kind": "youtube#video",
                "videoId": "-euUGPQZoHw"
            },
            "snippet": {
                "publishedAt": "2018-12-13T00:18:14Z",
                "channelId": "UCDeZ02gvPBuXQ0JU-a_6LwQ",
                "title": "Spider-Man Into The Spiderverse ‘What’s Up Danger Song’ Movie Clip (2018) HD",
                "description": "Spider-Man Into The Spiderverse ‘What’s Up Danger Song’ Movie Clip (2018) HD\nPlease subscribe and like our other channels ...\nFor all animation and superhero movies subscribe to ViralMEDIA @ https://goo.gl/Fe3wFZ\nFor all game trailers and game play subscribe to GameMEDIA @ https://goo.gl/B2LewQ\nFor all global trailers subscribe to Global Trailers @ https://goo.gl/Myaq8R",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-euUGPQZoHw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-euUGPQZoHw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-euUGPQZoHw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/-euUGPQZoHw/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/-euUGPQZoHw/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Viral MEDIA",
                "liveBroadcastContent": "none",
                "publishTime": "2018-12-13T00:18:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "M-u6eN9tsSHd9Y0oLyl7W-UgB7Y",
            "id": {
                "kind": "youtube#video",
                "videoId": "qRXB7bAXV9s"
            },
            "snippet": {
                "publishedAt": "2019-03-06T19:02:29Z",
                "channelId": "UCnLuLSV-Oi0ctqjxGgxFlmg",
                "title": "First 9 Minutes of the Movie | SPIDER-MAN: INTO THE SPIDER-VERSE",
                "description": "First 9 Minutes of the Movie | SPIDER-MAN: INTO THE SPIDER-VERSE\n\nWatch the first nine minutes of #SpiderVerse here and catch the rest on Digital now, and on Blu-ray 3/19!\n\nSynopsis:\n\nPhil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that’s the first of its kind.  “Spider-Man: Into the Spider-Verse” introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.\n\nDirected by Bob Persichetti, Peter Ramsey & Rodney Rothman\nScreenplay by Phil Lord\nProduced by Avi Arad, Amy Pascal, Phil Lord, Christopher Miller & Christina Steinberg\n \nCast:\n\nShameik Moore (Miles Morales)\nHailee Steinfeld\nMahershala Ali\nJake Johnson\nLiev Schreiber\nBrian Tyree Henry\nLuna Lauren Velez\nLily Tomlin\n \nThis film is rated PG by the MPAA. For ratings information refer to http://www.filmratings.com.\n\nLike us on Facebook! https://www.facebook.com/SonyPicturesAnimation\nFollow us on Twitter! https://twitter.com/SonyAnimation\nFollow us on Instagram! https://instagram.com/SonyAnimation\nFollow us on Tumblr! http://sonyanimation.tumblr.com\n\nhttp://www.sonypicturesanimation.com",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qRXB7bAXV9s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qRXB7bAXV9s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qRXB7bAXV9s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/qRXB7bAXV9s/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/qRXB7bAXV9s/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Sony Pictures Animation",
                "liveBroadcastContent": "none",
                "publishTime": "2019-03-06T19:02:29Z"
            }
        }
]);
  // const [vidID, setVidID] = useState("g4Hbz2jLxvQ")

  // const getVids = async()=>{
  //   await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=g4Hbz2jLxvQ&type=video&part=snippet&key=${API_KEY}`)
  //         .then(response => {setVideos(response.data.items)});
  // };

  return (
      <div>
        <VidMapper vidArray={videos} />
      </div>
  );
};

export default HomePage;
