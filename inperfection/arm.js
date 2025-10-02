// 1) 你的素材列表（保留不变）
const images = [
    "gallery/1.jpeg",
    "gallery/2.jpg",
    "gallery/3.jpg",
    "gallery/4.jpg",
    "gallery/5.jpg",
    "gallery/6.jpg",
    "gallery/7.jpg",
    "gallery/8.jpg",
    "gallery/9.jpg",
    "gallery/10.jpg",
    "gallery/11.jpg",
    "gallery/12.jpg",
    "gallery/13.jpg",
    "gallery/14.jpg",
    "gallery/15.jpg",
    "gallery/16.jpg",
    "gallery/17.jpg",
    "gallery/18.png",
    "gallery/19.png",
    "gallery/20.png",
    "gallery/21.png",
    "gallery/22.png",
    "gallery/23.png",
    "gallery/24.jpg",
    "gallery/25.jpg",
    "gallery/26.jpg",
    "gallery/27.jpg",
    "gallery/28.png",
    "gallery/29.png",
    "gallery/30.png",
    "gallery/31.png",
    "gallery/32.jpeg",
    "gallery/33.jpeg",
    "gallery/34.png",
    "gallery/35.jpg",
    "gallery/36.png",
    "gallery/37.png",
    "gallery/38.png",
    "gallery/39.png",
    "gallery/40.png",
    "gallery/41.png",
    "gallery/42.jpeg",
    "gallery/43.jpg",
    "gallery/44.jpg",
    "gallery/45.jpg",
    "gallery/46.jpg",
    "gallery/47.png",
    "gallery/48.png",
    "gallery/49.jpg",
    "gallery/50.jpg",
    "gallery/51.jpg",
    "gallery/52.jpg",
    "gallery/53.jpg",
    "gallery/54.jpeg",
    "gallery/55.jpeg",
    "body/1.png",
    "body/2.png",
    "body/3.png",
    "body/4.png",
    "body/5.png",
    "body/6.png",
    "body/7.png",
    "body/8.png",
    "body/9.png",
    "body/10.png",
    "body/11.jpg",
    "body/12.png",
    "body/13.png",
    "body/14.png",
    "body/15.png",
    "body/16.png",
    "body/17.png",
    "body/18.png",
    "body/19.png",
    "body/20.png",
    "body/21.jpg",
    "body/22.jpg",
    "body/23.jpg",
    "scroll-head/h1.jpeg",
    "scroll-head/h2.jpeg",

    "scroll-head/h4.jpeg",
    "scroll-head/h5.jpeg",
    "scroll-head/h6.jpeg",
    "scroll-head/h7.jpg",
    "scroll-head/h8.mp4",
    "scroll-head/h9.jpeg",
    "scroll-head/h10.jpg",
    "scroll-head/h11.gif",
    "scroll-head/h12.jpeg",
    "scroll-head/h13.jpeg",
    "scroll-head/h14.jpg",
    "scroll-head/h15.jpg",
    "scroll-head/h16.jpg",
    "scroll-head/h17.gif",
    "scroll-head/h18.jpeg",
    "scroll-head/h19.jpg",
    "scroll-head/h20.png",
    "scroll-head/h21.png",
    "scroll-head/h22.png",
    "scroll-head/h23.png",
    "scroll-head/h24.jpeg",
    "scroll-head/h25.jpg",
    "scroll-head/h26.jpg",
    "paper/1.png",
    "paper/2.jpeg",
    "paper/3.png",
    "paper/4.jpeg",
    "paper/5.png",
    "paper/6.jpeg",
    "paper/7.jpg",
    "paper/8.jpg",
    "paper/9.jpg",
    "paper/10.jpg",
    "paper/11.jpg",
    "paper/12.jpg",
    "paper/13.jpeg",
    "paper/14.jpeg",
    "paper/15.jpg",
    "paper/16.jpg",
    "paper/17.jpg",
    "paper/18.png",
    "paper/19.png",
    "paper/20.png",
    "paper/21.png",
    "paper/22.jpg",
    "paper/23.jpg",
    "paper/24.jpg",
    "paper/25.jpg",
    "paper/26.png",
    "paper/27.png",
    "paper/28.png",
    "paper/29.jpg",
    "paper/30.jpg",
    "paper/31.jpg",
    "paper/32.jpg",
    "paper/33.jpg",
    "paper/34.jpg",
    "paper/35.jpg",
    "paper/36.jpg",
    "paper/37.jpg",
    "paper/38.jpg",
    "paper/39.jpg",
    "paper/40.png",
    "drag/1c.jpeg",
    "drag/1a.jpeg",
    "drag/2a.jpeg",
    "drag/2c.png",
    "drag/3a.jpeg",
    "drag/3c.jpg",
    "drag/4a.jpeg",
    "drag/4c.png",
    "drag/5a.jpg",
    "drag/5c.png",
    "drag/6a.jpeg",
    "drag/6c.png"
  ];
  

  const META_OVERRIDES = {
    "gallery/1.jpeg": { author: "Erwin Wurm", year: "2025", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/2.jpg":  { author: "Erwin Wurm",     year: "2022",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/3.jpg": { author: "Erwin Wurm", year: "2024", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/4.jpg":  { author: "Erwin Wurm",     year: "2024",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/5.jpg": { author: "Erwin Wurm", year: "2024", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/6.jpg":  { author: "Erwin Wurm",     year: "2022",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/7.jpg": { author: "Erwin Wurm", year: "2024", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/8.jpg":  { author: "Erwin Wurm",     year: "2021",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/9.jpg": { author: "Erwin Wurm", year: "2020", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/10.jpg":  { author: "Erwin Wurm",     year: "2023",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/11.jpg": { author: "Erwin Wurm", year: "2023", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/12.jpg":  { author: "Erwin Wurm",     year: "2018",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/13.jpg": { author: "Erwin Wurm", year: "2006", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
    "gallery/14.jpg":  { author: "Viviane Sassen",     year: "2020",  source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/" },
    "gallery/15.jpg": { author: "Viviane Sassen", year: "2017/2020", source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/" },
    "gallery/16.jpg":  { author: "Viviane Sassen",     year: "2020",  source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/" },
    "gallery/17.jpg": { author: "Viviane Sassen", year: "2017", source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/" },
    "gallery/18.png":  { author: "René Magritte",     year: "1929",  source: "MoMA", link: "https://www.moma.org/artists/3692-rene-magritte" },
    "gallery/19.png": { author: "René Magritte", year: "1966", source: "NGA", link: "https://www.nga.gov/artworks/61171-rape" },
    "gallery/20.png":  { author: "René Magritte",     year: "1963",  source: "NGA", link: "https://www.nga.gov/artworks/110690-bijoux-indiscrets" },
    "gallery/21.png": { author: "Guy Bourdin", year: "1977", source: "MHG", link: "https://www.michaelhoppengallery.com/artists/30-guy-bourdin/works/4740-guy-bourdin-20-ans-c.-1977/" },
    "gallery/22.png": { author: "Guy Bourdin", year: "1976-1977", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/23.png": { author: "Guy Bourdin", year: "1969", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/24.jpg": { author: "Guy Bourdin", year: "1975", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/25.jpg": { author: "Guy Bourdin", year: "1975", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/26.jpg": { author: "Guy Bourdin", year: "1977", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/27.jpg": { author: "Guy Bourdin", year: "1978", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/28.png":  { author: "Guy Bourdin",     year: "1968",  source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/29.png": { author: "Guy Bourdin", year: "N/A", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
    "gallery/30.png":  { author: "Maurizio & Pierpaolo",     year: "N/A",  source: "Arles", link: "https://www.rencontres-arles.com/en/expositions/view/110/maurizio-cattelan-pierpaolo-ferrari" },
    "gallery/31.png": { author: "Maurizio & Pierpaolo", year: "N/A", source: "Arles", link: "https://www.rencontres-arles.com/en/expositions/view/110/maurizio-cattelan-pierpaolo-ferrari" },
    "gallery/32.jpeg":  { author: "John Stezaker",     year: "2018",  source: "GRAY", link: "https://www.richardgraygallery.com/artists/john-stezaker" },
    "gallery/33.jpeg": { author: "John Stezaker", year: "2015", source: "GRAY", link: "https://www.richardgraygallery.com/books/john-stezaker" },
    "gallery/34.png":  { author: "Hannah Höch",     year: "1930",  source: "MoMA", link: "https://www.moma.org/artists/2675-hannah-hoch" },
    "gallery/35.jpg": { author: "Hannah Höch", year: "1969", source: "Whitechapel Gallery", link: "https://www.whitechapelgallery.org/exhibitions/hannah-hoch/" },
    "gallery/36.png":  { author: "Hannah Höch",     year: "1967",  source: "Studio Int", link: "https://www.studiointernational.com/index.php/hannah-hoch-assembled-worlds-review-lower-belvedere-vienna-austria" },
    "gallery/37.png": { author: "Hannah Höch", year: "1926", source: "Studio Int", link: "https://www.studiointernational.com/index.php/hannah-hoch-assembled-worlds-review-lower-belvedere-vienna-austria" },
    "gallery/38.png":  { author: "Hannah Höch",     year: "1936",  source: "Studio Int", link: "https://www.studiointernational.com/index.php/hannah-hoch-assembled-worlds-review-lower-belvedere-vienna-austria" },
    "gallery/39.png": { author: "Barbara Kruger", year: "1982", source: "MoMA", link: "https://www.moma.org/artists/3266-barbara-kruger" },
    "gallery/40.png": { author: "David LaChapelle", year: "2007", source: "Artnet", link: "https://www.artnet.com/artists/david-lachapelle/after-the-deluge-statue-the-end-of-all-we-knew-a-Ivf9kfaAa1uq3YgmcSCang2" },
    "gallery/41.png": { author: "Hassan Hajjaj", year: "N/A", source: "Artsy", link: "https://www.artsy.net/artist/hassan-hajjaj" },
    "gallery/42.jpeg": { author: "Collier Schorr", year: "2000-2005", source: "303 Gallery", link: "https://www.303gallery.com/artists/collier-schorr/images/jens-f?view=slider#6" },
    "gallery/43.jpg": { author: "Sølve Sundsbø", year: "N/A", source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93" },
    "gallery/44.jpg":  { author: "Sølve Sundsbø",     year: "N/A",  source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93" },
    "gallery/45.jpg": { author: "Sølve Sundsbø", year: "N/A", source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93" },
    "gallery/46.jpg":  { author: "Sølve Sundsbø",     year: "N/A",  source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93" },
    "gallery/47.png": { author: "Sølve Sundsbø", year: "N/A", source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93" },
    "gallery/48.png":  { author: "Sølve Sundsbø",     year: "N/A",  source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93" },
    "gallery/49.jpg": { author: "Judy Blames", year: "N/A", source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" },
    "gallery/50.jpg":  { author: "Judy Blames",     year: "N/A",  source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" },
    "gallery/51.jpg": { author: "Judy Blames", year: "N/A", source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" },
    "gallery/52.jpg":  { author: "Judy Blames",     year: "N/A",  source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" },
    "gallery/53.jpg": { author: "Judy Blames", year: "N/A", source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" },
    "gallery/54.jpeg":  { author: "Zhang Ahuei",     year: "N/A",  source: "Cosmos", link: "https://www.cosmos.so/e/2132409676" },
    "gallery/55.jpeg": { author: "Giseok Cho", year: "N/A", source: "Cosmos", link: "https://www.cosmos.so/e/328562779" },
    "body/1.png": { author: "Jenny Saville", year: "2016", source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/2.png":  { author: "Jenny Saville",     year: "1998-1999",  source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/3.png": { author: "Jenny Saville", year: "1998-1999", source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/4.png":  { author: "Jenny Saville",     year: "1993-1994",  source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/5.png": { author: "Jenny Saville", year: "1992", source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/6.png":  { author: "Bailey Doogan",     year: "2002",  source: "BaileyDoogan", link: "https://www.baileydoogan.com/artist/index.html" },
    "body/7.png": { author: "Louise Bourgeois", year: "2005", source: "WMAA", link: "https://whitney.org/collection/works/27789" },
    "body/8.png":  { author: "Louise Bourgeois",     year: "2003/2008",  source: "WMAA", link: "https://whitney.org/collection/works/34551" },
    "body/9.png": { author: "Louise Bourgeois", year: "1986", source: "Artist Room", link: "https://www.artistrooms.org/sites/default/files/downloads/LouiseBourgeoisLearningResource.pdf" },
    "body/10.png":  { author: "Martin H Loftus",     year: "N/A",  source: "MHL", link: "https://martin-h-loftus.format.com/2421998-sculpture-student-work#38" },
    "body/11.jpg": { author: "Gianluca Traina", year: "2013", source: "gianlucatraina", link: "https://gianlucatraina.com/2013/10/19/portrait-360-unportrait-tokyo-designers-week-asia-awards/" },
    "body/12.png":  { author: "Gianluca Traina",     year: "2024",  source: "gianlucatraina", link: "https://gianlucatraina.com/ex-maquina/" },
    "body/13.png": { author: "Gianluca Traina", year: "2024", source: "gianlucatraina", link: "https://gianlucatraina.com/posthuman-selection/" },
    "body/14.png":  { author: "Gianluca Traina",     year: "2024",  source: "gianlucatraina", link: "https://gianlucatraina.com/posthuman-selection/" },
    "body/15.png": { author: "Gianluca Traina", year: "2024", source: "gianlucatraina", link: "https://gianlucatraina.com/posthuman-selection/" },
    "body/16.png":  { author: "Gianluca Traina",     year: "2024",  source: "gianlucatraina", link: "https://gianlucatraina.com/home/unportrait-ai/" },
    "body/17.png": { author: "Gianluca Traina", year: "2020", source: "gianlucatraina", link: "https://gianlucatraina.com/2020/11/07/mosaics-360/" },
    "body/18.png":  { author: "Gianluca Traina",     year: "N/A",  source: "gianlucatraina", link: "https://gianlucatraina.com/corpo-360/" },
    "body/19.png": { author: "Gianluca Traina", year: "2017", source: "gianlucatraina", link: "https://gianlucatraina.com/portrait-360__trashed/madeinchina/" },
    "body/20.png":  { author: "Gianluca Traina",     year: "N/A",  source: "gianlucatraina", link: "https://gianlucatraina.com/portrait-360__trashed/portrait-360/" },
    "body/21.jpg": { author: "Gianluca Traina", year: "N/A", source: "gianlucatraina", link: "https://gianlucatraina.com/portrait-360__trashed/portrait-360/" },
    "body/22.jpg": { author: "Lucian Freud", year: "1995", source: "Tate", link: "https://www.tate.org.uk/art/artworks/freud-woman-sleeping-p11507" },
    "body/23.jpg": { author: "Marlene Dumas", year: "2018", source: "davidzwirner", link: "https://www.davidzwirner.com/artworks/marlene-dumas-teeth-e9256" },
    "scroll-head/h1.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/6BTuuzxJ4" },
    "scroll-head/h2.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/7CAarCGC9" },

    "scroll-head/h4.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/7k1o3uPiR" },
    "scroll-head/h5.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/nGd0wEIMx" },
    "scroll-head/h6.jpeg":  { author: "Pasieka",     year: "N/A",  source: "Pinterest", link: "https://pin.it/5fWAbqUcs" },
    "scroll-head/h7.jpg": { author: "Erich Brechbühl", year: "2005", source: "Cosmos", link: "https://www.cosmos.so/e/1136567949" },
    "scroll-head/h8.mp4":  { author: "Antonin Waterkeyn",     year: "2025",  source: "Cosmos", link: "https://www.cosmos.so/e/1909064612" },
    "scroll-head/h9.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/2hx6xN7mG" },
    "scroll-head/h10.jpg":  { author: "Unknown",     year: "N/A",  source: "Cosmos", link: "https://www.cosmos.so/e/233320617" },
    "scroll-head/h11.gif": { author: "Arina Kokoreva", year: "2024", source: "Behance", link: "https://www.behance.net/gallery/106242271/MICROMUSIC" },
    "scroll-head/h12.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/5gUXxydAl" },
    "scroll-head/h13.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/MYWLTdgGu" },
    "scroll-head/h14.jpg":  { author: "Elia Schmid",     year: "2024",  source: "Cosmos", link: "https://www.cosmos.so/e/1187465402" },
    "scroll-head/h15.jpg": { author: "Unknown", year: "N/A", source: "Cosmos", link: "https://www.cosmos.so/e/178434355" },
    "scroll-head/h16.jpg":  { author: "@zinnurxoxo",     year: "2024",  source: "Cosmos", link: "https://www.cosmos.so/e/1919586871" },
    "scroll-head/h17.gif": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/6yNdw5rkh" },
    "scroll-head/h18.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/7sx0v3ZSo" },
    "scroll-head/h19.jpg": { author: "Wolfgang Weingart", year: "1971-1974", source: "MoMA", link: "https://www.moma.org/collection/works/86507" },
    "scroll-head/h20.png":  { author: "Wim Crouwel",     year: "1968",  source: "SFMOMA", link: "https://www.sfmoma.org/artwork/2015.658/?utm_source=chatgpt.com" },
    "scroll-head/h21.png": { author: "Vera Molnar", year: "1968-1969", source: "DAM", link: "https://dam.org/museum/artists_ui/artists/molnar-vera/interruptions/?utm_source=chatgpt.com" },
    "scroll-head/h22.png": { author: "Wade Guyton", year: "2006", source: "MoMA", link: "https://www.moma.org/calendar/galleries/5723" },
    "scroll-head/h23.png": { author: "Christopher Wool", year: "2023", source: "MoMA", link: "https://www.moma.org/collection/works/486059?classifications=any&date_begin=Pre-1850&date_end=2025&include_uncataloged_works=false&on_view=false&page=2&recent_acquisitions=false&with_images=true" },
    "scroll-head/h24.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/1vmUq41np" },
    "scroll-head/h25.jpg": { author: "Tereza Ruller", year: "2015", source: "Tumblr", link: "https://terezaruller.tumblr.com/post/118643675534/captured-by-success-video-for-smart-generation" },
    "scroll-head/h26.jpg": { author: "Tereza Ruller", year: "2017", source: "Tumblr", link: "https://terezaruller.tumblr.com/post/160981355889" },
"paper/1.png": { author: "Simone Forti", year: "2020", source: "MoMA", link: "https://www.moma.org/collection/works/435179?classifications=any&date_begin=Pre-1850&date_end=2025&include_uncataloged_works=false&on_view=false&page=10&recent_acquisitions=false&with_images=true" },
    "paper/2.jpeg":  { author: "Pat O'Neill",     year: "2008",  source: "WalkerArt", link: "https://walkerart.org/collections/artworks/horizontal-boundaries" },
    "paper/3.png": { author: "Charline von Heyl", year: "2019", source: "MoMA", link: "https://www.moma.org/collection/works/404610?classifications=any&date_begin=Pre-1850&date_end=2025&include_uncataloged_works=false&on_view=false&page=20&recent_acquisitions=false&with_images=true" },
    "paper/4.jpeg":  { author: "Peter Bundy",     year: "N/A",  source: "WalkerArt", link: "https://walkerart.org/collections/artworks/composition-321" },
    "paper/5.png": { author: "Frederick Sommer", year: "1987", source: "MoMA", link: "https://www.moma.org/collection/works/125023" },
    "paper/6.jpeg":  { author: "James Richards",     year: "2015",  source: "Radio at Night", link: "https://walkerart.org/collections/artworks/radio-at-night" },
    "paper/7.jpg": { author: "Marco Breuer", year: "2012", source: "SFMOMA", link: "https://www.sfmoma.org/artwork/2013.137/" },
    "paper/8.jpg":  { author: "Marco Breuer",     year: "2004",  source: "SFMOMA", link: "https://www.sfmoma.org/artwork/2005.201/" },
    "paper/9.jpg": { author: "Marco Breuer", year: "2013", source: "Pier24", link: "https://pier24.org/lecture/marco-breuer-3/" },
    "paper/10.jpg":  { author: "Marco Breuer",     year: "2016",  source: "Yossi Milo", link: "https://yossimilo.com/artists/55-marco-breuer/works/15858-marco-breuer-untitled-c-1784-2016/" },
    "paper/11.jpg": { author: "Marco Breuer", year: "2001", source: "Yossi Milo", link: "https://yossimilo.com/artists/55-marco-breuer/works/11624-marco-breuer-untitled-heat-gun-7-2001/" },
    "paper/12.jpg":  { author: "Marco Breuer",     year: "2012",  source: "Yossi Milo", link: "https://yossimilo.com/artists/55-marco-breuer/works/11612-marco-breuer-untitled-c-1221-2012/" },
    "paper/13.jpeg": { author: "Walead Beshty", year: "2014", source: "Petzel", link: "https://www.petzel.com/exhibitions/walead-beshty3/selected-works?view=slider#1" },
    "paper/14.jpeg":  { author: "Barbara Kasten",     year: "2022",  source: "BarbaraKasten", link: "https://barbarakasten.net/plan/#4" },
    "paper/15.jpg": { author: "Barbara Kasten", year: "2022", source: "BarbaraKasten", link: "https://barbarakasten.net/shield/#1" },
    "paper/16.jpg":  { author: "Barbara Kasten",     year: "2021",  source: "BarbaraKasten", link: "https://barbarakasten.net/variation/#1" },
    "paper/17.jpg": { author: "Barbara Kasten", year: "2014", source: "BarbaraKasten", link: "https://barbarakasten.net/transposition/#7" },
    "paper/18.png":  { author: "Aaron Siskind",     year: "1972",  source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/providence-a-HED-Y1cUwZGPbkoyTdhjkA2" },
    "paper/19.png": { author: "Aaron Siskind", year: "1952", source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/untitled-a-EK14-dK2x-Fu0Z8Vn-1fXA2" },
    "paper/20.png":  { author: "Aaron Siskind",     year: "1949",  source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/jerome-21-arizona-a-3deqx0W6BLUEGVnqpABRcw2" },
    "paper/21.png": { author: "Aaron Siskind", year: "1991", source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/lima-59-a-LgvKGtpwJ2QSNtBu50YDtw2" },
    "paper/22.jpg": { author: " Kurt Schwitters", year: "1923", source: "Tate", link: "https://www.tate.org.uk/art/artworks/schwitters-aphorism-t12393" },
    "paper/23.jpg": { author: "El Anatsui", year: "1923", source: "October Gallery", link: "https://octobergallery.co.uk/exhibitions/el-anatsui-timespace" },
    "paper/24.jpg": { author: "El Anatsui", year: "2023", source: "October Gallery", link: "https://octobergallery.co.uk/exhibitions/el-anatsui-timespace" },
    "paper/25.jpg": { author: "Tara Donovan", year: "2020", source: "Pace", link: "https://www.pacegallery.com/exhibitions/tara-donovan-intermediaries/" },
    "paper/26.png": { author: "Tara Donovan", year: "2003", source: "Rice Gallery", link: "https://www.ricegallery.org/tara-donovan" },
    "paper/27.png": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4025779-%27%20Trevi%20%20I%20%27.html" },
    "paper/28.png":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4239311-%27%20Bar%20Code%20Red%20%27.html" },
    "paper/29.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/961248-%27%20Duet%20%27.html" },
    "paper/30.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/961241-%27%20Lasting%20Impression%20%27.html" },
    "paper/31.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/974214-%27%20Woody%20%27.html" },
    "paper/32.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4414579-%27%20Hidden%20Message%20%27.html" },
    "paper/33.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4025781-%27%20Arsenale%20%27.html" },
    "paper/34.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4239305-%27%20One%20Red%20%27.html" },
    "paper/35.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4634771-%27%20Head%20Over%20Heels%20%27%20.html" },
    "paper/36.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4189813-%27%20Wanting%20%27.html" },
    "paper/37.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/2346738-%27%20Fragments%20%27.html" },
    "paper/38.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4289426-%27%20Uninhibited%20%27.html" },
    "paper/39.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4034047-%27%20Escape%20%27.html" },
    "paper/40.png": { author: "Atsuko Tanaka", year: "1956", source: "MoMA", link: "https://www.moma.org/calendar/exhibitions/1056" },
    "drag/1c.jpeg": {author: "Kelly Wearstler",  year: "N/A", source: "WearstlerWorld",   link: "https://www.kellywearstler.com/art_sculpture/volute-sculpture/HBR41C130L.html?epik=dj0yJnU9N0R0Nmc0a2JqVnpJWkR5THB1TENZaHI4b3loME1PRm0mcD0wJm49WHAzSF9pUFpzSG9jZWoyaklGb0w4QSZ0PUFBQUFBR2pUVVRr"},
    "drag/1a.jpeg": {author: "Unknown",  year: "N/A", source: "Pinterest",   link: "https://pin.it/407PYHNmE" },
    "drag/2c.png": {author: "Unknown", year: "N/A",  source: "Tubler",  link: "https://peppermintgreenapple.tumblr.com/post/181042949460" },
    "drag/2a.jpeg": {author: "Jesse Draxler",  year: "2023", source: "Cosmos",  link: "https://www.cosmos.so/e/650278401" },
    "drag/3c.jpg": {author: "Vanessa da Silva", year: "2017",  source: "Cosmos", link: "https://www.cosmos.so/e/576467961" },
    "drag/3a.jpeg": {author: "Unknown",  year: "N/A", source: "Pinterest",   link: "https://pin.it/7MK2ZkAdw" },
    "drag/4c.png": {author: "Henri Michaux",  year: "1970", source: "Galerie",   link: "https://www.galerie-nothelfer.de/en/artist/14-henri-michaux" },
    "drag/4a.jpeg": {author: "Lois Greenfield",  year: "2008", source: "Artsy",   link: "https://www.artsy.net/artwork/lois-greenfield-sara-joel-and-anna-venizelos" },
    "drag/5c.png": {author: "Mathias Bengtsson", year: "2016",  source: "DesignMiami", link: "https://shop.designmiami.com/blogs/news/mathias-bengtsson-on-21st-century-design" },
    "drag/5a.jpg": {author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/2O0Enp2PT" },
    "drag/6c.png": {author: "Brice Marden", year: "1996",  source: "WMAA", link: "https://whitney.org/collection/works/11024" },
    "drag/6a.jpeg": {author: "Unknown",  year: "N/A", source: "Pinterest",   link: "https://pin.it/4nCqrGRhb" }
  };


const items2 = images.map(src => {
    const base = {
      src,
      author: "Unknown",
      year: "N/A",
      source: src.toLowerCase().includes("pinterest") ? "Pinterest" : "Website",
      link: src
    };
    return Object.assign(base, META_OVERRIDES[src] || {});
  });
  
  // 简单洗牌
  function shuffle2(arr){
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  // 渲染网格
  function renderGrid2(list){
    const grid = document.getElementById('grid2');
    grid.innerHTML = '';
  
    list.forEach(data => {
      const card = document.createElement('div');
      card.className = 'card2';
      card.dataset.author = data.author;
      card.dataset.year = data.year;
  
      const wrap = document.createElement('div');
      wrap.className = 'photo-wrap2';
  
      // 用 div 背景图 + cover 来实现“最短边=格子边”，并允许平移
      const surf = document.createElement('div');
      surf.className = 'pan-surface2';
      surf.style.backgroundImage = `url("${data.src}")`;
      // 记录当前偏移（百分比 0~100）
      surf.dataset.posX = '50';
      surf.dataset.posY = '50';
  
      // overlay
      const overlay = document.createElement('div');
      overlay.className = 'overlay2';
      overlay.innerHTML = `
        <div>${data.author}</div>
        <div>${data.year}</div>
        <div style="height:.8em;"></div>
        <div><a class="source-link" href="${data.link}" target="_blank" rel="noopener noreferrer">${data.source}</a></div>
      `;
  
      wrap.appendChild(surf);
      wrap.appendChild(overlay);
      card.appendChild(wrap);
      grid.appendChild(card);
  
      // 绑定拖动以改变 background-position
      enablePanInsideCell(surf);
    });
  }
  
  // 在格子内部拖动：更新 background-position
  function enablePanInsideCell(surf){
    let dragging = false;
    let startX=0, startY=0;
    let baseX=50, baseY=50;  // 初始百分比位置
    let cellW=0, cellH=0;
  
    const onDown = (e) => {
      dragging = true;
      const pt = getPoint(e);
      startX = pt.x; startY = pt.y;
      baseX = parseFloat(surf.dataset.posX || '50');
      baseY = parseFloat(surf.dataset.posY || '50');
      const rect = surf.getBoundingClientRect();
      cellW = rect.width; cellH = rect.height;
      surf.classList.add('dragging');
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onMove, {passive:false});
      window.addEventListener('touchend', onUp);
    };
  
    const onMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      const pt = getPoint(e);
      const dx = pt.x - startX;
      const dy = pt.y - startY;
  
      // 将像素位移换算成百分比位移（经验：水平/垂直 ±100% 基本能覆盖可视区域大部分）
      const deltaXPercent = (dx / cellW) * 100;
      const deltaYPercent = (dy / cellH) * 100;
  
      // 背景位置（0~100%区间内裁切，避免完全滑出）
      let nx = clamp(baseX + deltaXPercent, 0, 100);
      let ny = clamp(baseY + deltaYPercent, 0, 100);
  
      surf.dataset.posX = nx.toFixed(2);
      surf.dataset.posY = ny.toFixed(2);
      surf.style.backgroundPosition = `${nx}% ${ny}%`;
    };
  
    const onUp = () => {
      dragging = false;
      surf.classList.remove('dragging');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  
    surf.addEventListener('mousedown', onDown);
    surf.addEventListener('touchstart', onDown, {passive:true});
  
    // 初始位置
    surf.style.backgroundPosition = '50% 50%';
  }
  
  function getPoint(e){
    if (e.touches && e.touches[0]){
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }
  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }
  
  // 排序：重新渲染顺序（位置不变为网格流排布）
  function applyOrder2(mode){
    let list = items2.slice();
    const num = v => (v==='N/A'||v===''||v===null) ? NaN : Number(v);
  
    switch(mode){
      case 'year-asc':
        list.sort((a,b)=>{
          const A=num(a.year), B=num(b.year);
          if (isNaN(A) && isNaN(B)) return 0;
          if (isNaN(A)) return 1;
          if (isNaN(B)) return -1;
          return A-B;
        });
        break;
      case 'year-desc':
        list.sort((a,b)=>{
          const A=num(a.year), B=num(b.year);
          if (isNaN(A) && isNaN(B)) return 0;
          if (isNaN(A)) return 1;
          if (isNaN(B)) return -1;
          return B-A;
        });
        break;
      case 'author-asc':
        list.sort((a,b)=> (a.author||'').localeCompare(b.author||''));
        break;
      case 'author-desc':
        list.sort((a,b)=> (b.author||'').localeCompare(a.author||''));
        break;
      default:
        shuffle2(list);
    }
  
    renderGrid2(list);
  }
  
  // 初始化
  window.addEventListener('DOMContentLoaded', () => {
    applyOrder2('random');
    const sel = document.getElementById('sortBy2');
    if (sel) sel.addEventListener('change', ()=> applyOrder2(sel.value));
  });









  // === 只保留随机代码背景 (挂载到 #webpg) ===
(function makeCodeBackground () {
  const root = document.getElementById('webpg');  // << 目标容器
  if (!root) return;

  const palette = ['var(--c-a)','var(--c-b)','var(--c-c)','var(--c-d)','var(--c-e)'];
  const TOKENS = [
    ..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    ..."(){}[]<>;:,.=+-*/!&|^%?_#@$",
    ..."     ",
  ];
  const GLITCHES = ['¿', '§', 'Ø', '¶', '∆', '‚', '•', '≈', '«', '»', '¤'];

  let intervalId = null;
  let resizeTimer = null;

  function randomToken(i) {
    if (Math.random() < 0.10) return GLITCHES[i % GLITCHES.length];
    return TOKENS[Math.floor(Math.random() * TOKENS.length)];
  }

  function makeSpan(char, i, cols) {
    const span = document.createElement('span');
    span.className = 'bit';
    span.textContent = char;
    const c = palette[Math.floor(Math.random() * palette.length)];
    span.style.color = c;
    span.style.opacity = (
      Math.random()*0.5 + parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bit-alpha'))
    ).toFixed(2);
    return span;
  }

  function populate(){
    const bitSizeVar = getComputedStyle(document.documentElement).getPropertyValue('--bit-size').trim();
    const bitSize = parseInt(bitSizeVar || '14', 10) || 14;

    const charWidth  = bitSize;
    const charHeight = Math.round(bitSize * 1.25);

    const w = Math.max(1, Math.floor(root.clientWidth));
    const h = Math.max(1, Math.floor(root.clientHeight));
    const cols = Math.ceil(w / Math.max(8, charWidth));
    const rows = Math.ceil(h / Math.max(8, charHeight)) + 2;

    const htmlFrag = document.createDocumentFragment();
    root.innerHTML = '';

    for (let r = 0; r < rows; r++) {
      let indent = ' '.repeat(Math.floor(Math.random()*8));
      const special =
        Math.random() < 0.08 ? '// TODO: fix me' :
        (Math.random() < 0.06 ? 'function ' : '');

      const prefixLen = Math.floor(cols * 0.2);
      const line = (indent + special).padEnd(prefixLen, ' ');
      const lineChars = line.split('');

      for (let i = 0; i < lineChars.length && i < cols; i++) {
        htmlFrag.appendChild(makeSpan(lineChars[i], r*cols + i, cols));
      }
      for (let c = lineChars.length; c < cols; c++) {
        const ch = randomToken(r*cols + c);
        htmlFrag.appendChild(makeSpan(ch, r*cols + c, cols));
      }
    }
    root.appendChild(htmlFrag);
  }

  function onResize(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      populate();
    }, 120);
  }

  function stopTicker(){
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
  }

  function startRandom() {
    root.classList.add('is-random');
    root.innerHTML = '';
    populate();

    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);

    stopTicker();
    intervalId = setInterval(() => {
      const bits = root.querySelectorAll('.bit');
      if (!bits.length) return;
      for (let k = 0; k < 40; k++) {
        const idx = Math.floor(Math.random() * bits.length);
        const el = bits[idx];
        el.textContent = randomToken(idx);
      }
    }, 900);
  }

  // 初始进入随机代码模式
  startRandom();

  // 暴露全局控制
  window.WebPG = {
    showRandom: startRandom,
    isRandom: () => true
  };
})();








// 自定义下拉：把 #sortBy2 变成与 .filter-panel2 同风格的菜单
(function buildCustomDropdown2(){
  const panel = document.querySelector('.filter-panel2');
  const sel   = document.getElementById('sortBy2');
  if (!panel || !sel) return;

  // 隐藏原生 select（保留语义与事件）
  sel.style.position = 'absolute';
  sel.style.opacity = '0';
  sel.style.pointerEvents = 'none';
  sel.tabIndex = -1;

  // 容器
  const wrap = document.createElement('div');
  wrap.className = 'dropdown2';

  // 触发按钮
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'dropdown2-btn';
  btn.setAttribute('aria-haspopup', 'listbox');
  btn.setAttribute('aria-expanded', 'false');

  const curLabel = sel.options[sel.selectedIndex]?.text || 'Select';
  btn.innerHTML = `
    <span class="dropdown2-label">${curLabel}</span>
    <span class="dropdown2-arrow">▾</span>
  `;

  // 列表
  const list = document.createElement('ul');
  list.className = 'dropdown2-list';
  list.setAttribute('role', 'listbox');
  list.tabIndex = -1;
  list.hidden = true;

  [...sel.options].forEach((opt, i) => {
    const li = document.createElement('li');
    li.className = 'dropdown2-item' + (opt.selected ? ' is-selected' : '');
    li.setAttribute('role', 'option');
    li.dataset.value = opt.value;
    li.textContent = opt.text;
    list.appendChild(li);
  });

  // 挂载
  panel.appendChild(wrap);
  wrap.appendChild(btn);
  wrap.appendChild(list);

  // 打开/关闭
  let activeIndex = [...sel.options].findIndex(o => o.value === sel.value);

  function highlight(idx){
    const items = [...list.children];
    items.forEach((li, i) => li.classList.toggle('is-active', i === idx));
    // 简单对齐可见区域
    list.scrollTop = Math.max(0, idx * 36 - 60);
  }
  function open(){
    list.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    wrap.classList.add('open');
    activeIndex = Math.max(0, [...sel.options].findIndex(o => o.value === sel.value));
    highlight(activeIndex);
    document.addEventListener('click', onDocClick);
  }
  function close(){
    list.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    wrap.classList.remove('open');
    document.removeEventListener('click', onDocClick);
  }
  function onDocClick(e){
    if (!wrap.contains(e.target)) close();
  }

  function selectValue(val){
    sel.value = val;
    sel.dispatchEvent(new Event('change', { bubbles: true }));
    btn.querySelector('.dropdown2-label').textContent =
      [...sel.options].find(o => o.value === val)?.text || val;
    [...list.children].forEach(li =>
      li.classList.toggle('is-selected', li.dataset.value === val)
    );
  }

  // 事件
  btn.addEventListener('click', () => list.hidden ? open() : close());

  list.addEventListener('click', (e) => {
    const li = e.target.closest('.dropdown2-item');
    if (!li) return;
    selectValue(li.dataset.value);
    close();
  });

  // 键盘可达性
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); open(); list.focus();
    }
  });
  list.addEventListener('keydown', (e) => {
    const max = sel.options.length - 1;
    if (e.key === 'Escape') { e.preventDefault(); close(); btn.focus(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(max, activeIndex + 1); highlight(activeIndex); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); activeIndex = Math.max(0, activeIndex - 1);   highlight(activeIndex); }
    if (e.key === 'Home')      { e.preventDefault(); activeIndex = 0;  highlight(activeIndex); }
    if (e.key === 'End')       { e.preventDefault(); activeIndex = max; highlight(activeIndex); }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const li = list.children[activeIndex];
      if (li){ selectValue(li.dataset.value); close(); btn.focus(); }
    }
  });
})();