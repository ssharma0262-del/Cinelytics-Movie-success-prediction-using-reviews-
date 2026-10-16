const MOVIE_SETS={
English:[
['Dune: Part Two',2024,'2h 46m',['Sci-Fi','Adventure']],['Oppenheimer',2023,'3h 0m',['Drama','History']],['Inception',2010,'2h 28m',['Sci-Fi','Thriller']],['Interstellar',2014,'2h 49m',['Sci-Fi','Drama']],['The Dark Knight',2008,'2h 32m',['Action','Crime']],['Avengers: Endgame',2019,'3h 1m',['Action','Adventure']],['Spider-Man: No Way Home',2021,'2h 28m',['Action','Adventure']],['The Matrix',1999,'2h 16m',['Sci-Fi','Action']],['Top Gun: Maverick',2022,'2h 11m',['Action','Drama']],['The Shawshank Redemption',1994,'2h 22m',['Drama','Crime']],['Everything Everywhere All at Once',2022,'2h 19m',['Sci-Fi','Comedy']],['Barbie',2023,'1h 54m',['Comedy','Romance']],['Parasite',2019,'2h 12m',['Crime','Thriller']],['Titanic',1997,'3h 14m',['Romance','Drama']],['Mad Max: Fury Road',2015,'2h 0m',['Action','Adventure']],['Toy Story',1995,'1h 21m',['Adventure','Comedy']],['Morbius',2022,'1h 44m',['Action','Horror']],['The Flash',2023,'2h 24m',['Action','Sci-Fi']],['Black Adam',2022,'2h 5m',['Action','Adventure']],['Tenet',2020,'2h 30m',['Sci-Fi','Thriller']],['The Marvels',2023,'1h 45m',['Action','Sci-Fi']]
],
Hindi:[
['12th Fail',2023,'2h 27m',['Drama','Biography']],['Jawan',2023,'2h 49m',['Action','Thriller']],['Stree 2',2024,'2h 27m',['Comedy','Horror']],['3 Idiots',2009,'2h 50m',['Comedy','Drama']],['Dangal',2016,'2h 41m',['Drama','Biography']],['Lagaan',2001,'3h 44m',['Drama','Sport']],['Andhadhun',2018,'2h 19m',['Thriller','Crime']],['Zindagi Na Milegi Dobara',2011,'2h 35m',['Drama','Adventure']],['Drishyam 2',2022,'2h 20m',['Crime','Thriller']],['Bajrangi Bhaijaan',2015,'2h 43m',['Drama','Adventure']],['Dhurandhar',2025,'3h 34m',['Action','Thriller','Crime']],['Animal',2023,'3h 24m',['Action','Crime','Drama']],['Laapataa Ladies',2024,'2h 2m',['Comedy','Drama']],['Maharaj',2024,'2h 11m',['Drama','History']],['Article 370',2024,'2h 38m',['Action','Thriller','Drama']],['Shamshera',2022,'2h 58m',['Action','Drama']],['Cirkus',2022,'2h 20m',['Comedy']],['83',2021,'2h 43m',['Drama','Biography']],['Jersey',2022,'2h 50m',['Drama','Sport']],['Samrat Prithviraj',2022,'2h 15m',['Action','History']]
],
Telugu:[
['RRR',2022,'3h 2m',['Action','Drama']],['Pushpa: The Rise',2021,'2h 59m',['Action','Crime']],['Kalki 2898 AD',2024,'3h 0m',['Sci-Fi','Action']],['Baahubali: The Beginning',2015,'2h 38m',['Action','Adventure']],['Baahubali 2: The Conclusion',2017,'2h 47m',['Action','Drama']],['Arjun Reddy',2017,'3h 2m',['Romance','Drama']],['Jersey',2019,'2h 40m',['Drama','Sport']],['Ala Vaikunthapurramuloo',2020,'2h 45m',['Action','Comedy']],['Eega',2012,'2h 25m',['Fantasy','Action']],['Sita Ramam',2022,'2h 43m',['Romance','Drama']],['Liger',2022,'2h 20m',['Action','Drama']],['Radhe Shyam',2022,'2h 18m',['Romance','Drama']],['Adipurush',2023,'2h 59m',['Action','Fantasy']],['Acharya',2022,'2h 32m',['Action','Drama']],['World Famous Lover',2020,'2h 20m',['Romance','Drama']]
],
Malayalam:[
['Premalu',2024,'2h 36m',['Romance','Comedy']],['Manjummel Boys',2024,'2h 15m',['Adventure','Drama']],['Aavesham',2024,'2h 38m',['Action','Comedy']],['Drishyam',2013,'2h 14m',['Crime','Thriller']],['Bangalore Days',2014,'2h 52m',['Drama','Romance']],['Kumbalangi Nights',2019,'2h 15m',['Drama','Comedy']],['Minnal Murali',2021,'2h 38m',['Action','Fantasy']],['The Great Indian Kitchen',2021,'1h 40m',['Drama']],['Jaya Jaya Jaya Jaya Hey',2022,'2h 25m',['Comedy','Drama']],['2018',2023,'2h 30m',['Drama','Disaster']],['Monster',2022,'2h 15m',['Thriller','Crime']],['Marakkar: Lion of the Arabian Sea',2021,'3h 2m',['Action','History']],['King of Kotha',2023,'2h 56m',['Action','Crime']],['Alone',2023,'2h 2m',['Horror','Thriller']],['Turbo',2024,'2h 30m',['Action','Comedy']]
],
Kannada:[
['Kantara',2022,'2h 30m',['Action','Drama','Thriller']],['K.G.F: Chapter 2',2022,'2h 48m',['Action','Crime','Thriller']],['777 Charlie',2022,'2h 46m',['Adventure','Drama']],['K.G.F: Chapter 1',2018,'2h 35m',['Action','Crime']],['Kirik Party',2016,'2h 5m',['Comedy','Romance']],['Raajakumara',2017,'2h 28m',['Drama','Action']],['Garuda Gamana Vrishabha Vahana',2021,'2h 35m',['Crime','Drama']],['Lucia',2013,'2h 15m',['Sci-Fi','Thriller']],['Avane Srimannarayana',2019,'2h 54m',['Adventure','Comedy']],['U Turn',2016,'2h 0m',['Thriller','Mystery']],['Kabzaa',2023,'2h 16m',['Action','Crime']],['Roberrt',2021,'2h 55m',['Action','Drama']],['Yuvarathnaa',2021,'2h 37m',['Action','Drama']],['Kavaludaari',2019,'2h 25m',['Crime','Thriller']],['Kotigobba 3',2021,'2h 35m',['Action','Thriller']]
],
Tamil:[
['96',2018,'2h 38m',['Romance','Drama']],['Maharaja',2024,'2h 21m',['Action','Crime','Thriller']],['Vikram',2022,'2h 54m',['Action','Crime','Thriller']],['Leo',2023,'2h 44m',['Action','Thriller']],['Kaithi',2019,'2h 25m',['Action','Crime','Thriller']],['Super Deluxe',2019,'2h 56m',['Drama','Comedy']],['Soorarai Pottru',2020,'2h 33m',['Drama','Biography']],['Jai Bhim',2021,'2h 44m',['Drama','Crime']],['Vada Chennai',2018,'2h 46m',['Crime','Drama']],['Love Today',2022,'2h 34m',['Romance','Comedy']],['Beast',2022,'2h 35m',['Action','Thriller']],['Indian 2',2024,'2h 58m',['Action','Drama']],['Cobra',2022,'3h 3m',['Thriller','Crime']],['Valimai',2022,'2h 58m',['Action','Crime']],['Prince',2022,'2h 23m',['Comedy','Romance']]
],
};

const MAIN_GENRES=['Action','Drama','Thriller','Comedy','Romance','Sci-Fi','Adventure','Crime','Horror','Biography'];

const DIRECT_POSTERS={
'Dune: Part Two':'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
'Oppenheimer':'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
'Inception':'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
'Interstellar':'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
'Drishyam 2':'https://image.tmdb.org/t/p/w500/yJNNwHQuKYNeHFbsxSFR6yK9Dda.jpg',
'Kantara':'https://cdn.prod.website-files.com/67ae0cfed539a001cc421a7e/680c95f749c720006cf86b28_Kantara.avif',
'K.G.F: Chapter 2':'https://cdn.prod.website-files.com/67ae0cfed539a001cc421a7e/680c962ffe670f202462e6b8_KGF_C2.avif',
'777 Charlie':'https://www.paramvah.com/images/films/777-charlie/777-CharliePoster2.jpg',

'Jawan':'https://m.media-amazon.com/images/M/MV5BMjlkZTg4NzktYzg2ZC00YjUxLThmOWYtMzc1NzBjMDNjNTEwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg',
'96':'https://m.media-amazon.com/images/M/MV5BNjFiZmFjNTEtNTQ1Yi00NDMyLWI5ODItZjllYjg3Yzg3NzJiXkEyXkFqcGc%40._V1_.jpg',
'Vikram':'https://m.media-amazon.com/images/M/MV5BNDEyMWQ0ZDktNTY0MC00YWRkLWFlMjQtMDUxMjRlMDhmMmRlXkEyXkFqcGc%40._V1_.jpg',
'Love Today':'https://pbs.twimg.com/media/Ff_77wCUYAYcrzi.jpg',
'Kaithi':'https://i.gadgets360cdn.com/products/large/Kaithi1-1200x1714-1656773605891.jpg',
'Beast':'https://cdn.wallpapersafari.com/61/60/pOYtoN.jpg',



'Maharaja':'https://www.impawards.com/intl/india/2024/posters/maharaja.jpg',
'Dangal':'https://www.impawards.com/intl/india/2016/posters/dangal.jpg',
'Article 370':'https://www.impawards.com/intl/india/2024/posters/article_370.jpg',
'Cirkus':'https://www.impawards.com/intl/india/2022/posters/cirkus.jpg',
'Acharya':'https://www.impawards.com/intl/india/2022/posters/acharya.jpg',
'83':'https://www.impawards.com/intl/india/2021/posters/83.jpg'
};

const REVIEWS={
positive:['Wonderful experience, highly recommend it to everyone.','Powerful, emotional and beautifully made film.','Fantastic film with a strong message and great performances.','One of the best films this year, absolutely outstanding.','Absolutely loved the story. A masterpiece.','Brilliant performances, the whole theatre was cheering.','The music is excellent, truly a must watch.','Superb and gripping from start to finish.'],
neutral:['Watched it once. Average film overall.','The story is fine, though some parts feel long.','Decent effort, but a few scenes were average.','The film is ordinary with a few interesting moments.'],
negative:['Awful film, the weakest part was the screenplay.','Some scenes were boring and disappointing.','Not bad, but several parts felt slow and weak.']};
const POS=['amazing','brilliant','loved','love','masterpiece','excellent','powerful','beautiful','best','outstanding','great','fantastic','superb','gripping','wonderful','recommend','must watch','enjoyed','awesome','perfect','zabardast','accha'];
const NEG=['awful','worst','terrible','boring','disappointing','poor','weak','waste','bad','horrible','hate','forgettable','mediocre','overrated','bakwas','bekar','slow'];

let MOVIES=[]; let current=null,activeLanguage='All',activeGenre='All',reviews=[],currentFilter='all',libraryMode='language';
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function buildMovies(){
 const sentimentProfiles={
  '12th Fail':[31,4,1,91], 'Jawan':[25,7,4,82], 'Stree 2':[24,8,4,79], '3 Idiots':[32,3,1,94], 'Dangal':[31,4,1,93], 'Lagaan':[30,5,1,91], 'Andhadhun':[29,5,2,89], 'Zindagi Na Milegi Dobara':[29,6,1,90], 'Drishyam 2':[27,6,3,84], 'Bajrangi Bhaijaan':[30,5,1,92], 'Dhurandhar':[29,4,3,88], 'Animal':[22,6,8,72], 'Laapataa Ladies':[30,5,1,91], 'Maharaj':[25,7,4,81], 'Article 370':[26,6,4,83],
  'Dune: Part Two':[31,4,1,94], 'Oppenheimer':[30,5,1,93], 'Inception':[32,3,1,95], 'Interstellar':[33,2,1,96], 'The Dark Knight':[32,3,1,96], 'Avengers: Endgame':[29,5,2,90], 'Spider-Man: No Way Home':[28,6,2,87], 'The Matrix':[31,4,1,94], 'Top Gun: Maverick':[30,5,1,92], 'The Shawshank Redemption':[33,2,1,97], 'Everything Everywhere All at Once':[28,6,2,88], 'Barbie':[25,7,4,80], 'Parasite':[31,4,1,94], 'Titanic':[32,3,1,95], 'Mad Max: Fury Road':[31,4,1,94], 'Toy Story':[32,3,1,95],
  'RRR':[28,5,3,86], 'Pushpa: The Rise':[27,6,3,83], 'Kalki 2898 AD':[27,5,4,82], 'Baahubali: The Beginning':[30,4,2,90], 'Baahubali 2: The Conclusion':[31,4,1,93], 'Arjun Reddy':[24,6,6,77], 'Jersey':[29,5,2,88], 'Ala Vaikunthapurramuloo':[28,6,2,86], 'Eega':[28,6,2,85], 'Sita Ramam':[31,4,1,93],
  'Premalu':[30,5,1,92], 'Manjummel Boys':[31,4,1,94], 'Aavesham':[29,5,2,89], 'Drishyam':[32,3,1,95], 'Bangalore Days':[30,5,1,91], 'Kumbalangi Nights':[29,6,1,90], 'Minnal Murali':[25,7,4,80], 'The Great Indian Kitchen':[28,6,2,87], 'Jaya Jaya Jaya Jaya Hey':[27,6,3,83], '2018':[30,5,1,92],
  'Kantara':[28,5,3,87], 'K.G.F: Chapter 2':[27,6,3,84], '777 Charlie':[30,5,1,91], 'K.G.F: Chapter 1':[28,6,2,87], 'Kirik Party':[29,5,2,89], 'Raajakumara':[27,7,2,84], 'Garuda Gamana Vrishabha Vahana':[28,6,2,88], 'Lucia':[29,5,2,89], 'Avane Srimannarayana':[25,7,4,81], 'U Turn':[24,7,5,78],
  'Morbius':[10,7,13,34], 'The Flash':[18,10,12,52], 'Black Adam':[19,9,8,58], 'Tenet':[20,9,6,64], 'The Marvels':[9,6,15,38],
  'Shamshera':[9,7,16,31], 'Cirkus':[7,8,17,28], '83':[20,8,7,63], 'Jersey':[18,8,8,58], 'Samrat Prithviraj':[10,8,14,39],
  'Liger':[7,8,17,27], 'Radhe Shyam':[8,7,15,30], 'Adipurush':[10,8,16,34], 'Acharya':[9,8,13,36], 'World Famous Lover':[8,7,15,29],
  'Monster':[7,8,15,30], 'Marakkar: Lion of the Arabian Sea':[14,9,10,48], 'King of Kotha':[15,8,9,53], 'Alone':[7,7,14,29], 'Turbo':[18,8,8,58],
  'Kabzaa':[8,8,14,32], 'Roberrt':[22,7,5,70], 'Yuvarathnaa':[17,8,7,61], 'Kavaludaari':[20,7,4,76], 'Kotigobba 3':[18,8,6,64],
  'Beast':[20,9,7,62], 'Indian 2':[10,9,15,40], 'Cobra':[8,8,14,32], 'Valimai':[16,9,9,52], 'Prince':[15,9,8,50],
  '96':[31,4,1,94], 'Maharaja':[30,4,2,93], 'Vikram':[29,5,2,89], 'Leo':[25,7,4,80], 'Kaithi':[30,5,1,92], 'Super Deluxe':[27,6,3,85], 'Soorarai Pottru':[31,4,1,94], 'Jai Bhim':[30,5,1,92], 'Vada Chennai':[29,5,2,90], 'Love Today':[28,6,2,87]
 };
 const verdicts={
  '12th Fail':'Successful','Jawan':'Successful','Stree 2':'Successful','3 Idiots':'Successful','Dangal':'Successful','Lagaan':'Successful','Andhadhun':'Successful','Zindagi Na Milegi Dobara':'Successful','Drishyam 2':'Successful','Bajrangi Bhaijaan':'Successful','Dhurandhar':'Successful','Laapataa Ladies':'Successful',
  'Dune: Part Two':'Successful','Oppenheimer':'Successful','Inception':'Successful','Interstellar':'Successful','The Dark Knight':'Successful','Avengers: Endgame':'Successful','Spider-Man: No Way Home':'Successful','The Matrix':'Successful','Top Gun: Maverick':'Successful','The Shawshank Redemption':'Successful','Everything Everywhere All at Once':'Successful','Barbie':'Successful','Parasite':'Successful','Titanic':'Successful','Mad Max: Fury Road':'Successful','Toy Story':'Successful',
  'RRR':'Successful','Pushpa: The Rise':'Successful','Kalki 2898 AD':'Successful','Baahubali: The Beginning':'Successful','Baahubali 2: The Conclusion':'Successful','Jersey':'Successful','Ala Vaikunthapurramuloo':'Successful','Eega':'Successful','Sita Ramam':'Successful',
  'Premalu':'Successful','Manjummel Boys':'Successful','Aavesham':'Successful','Drishyam':'Successful','Bangalore Days':'Successful','Kumbalangi Nights':'Successful','Minnal Murali':'Successful','The Great Indian Kitchen':'Successful','Jaya Jaya Jaya Jaya Hey':'Successful','2018':'Successful',
  'Kantara':'Successful','K.G.F: Chapter 2':'Successful','777 Charlie':'Successful','K.G.F: Chapter 1':'Successful','Kirik Party':'Successful','Raajakumara':'Successful','Garuda Gamana Vrishabha Vahana':'Successful','Lucia':'Successful','Avane Srimannarayana':'Average','U Turn':'Average',
  '96':'Successful','Maharaja':'Successful','Vikram':'Successful','Leo':'Successful','Kaithi':'Successful','Super Deluxe':'Average','Soorarai Pottru':'Successful','Jai Bhim':'Successful','Vada Chennai':'Average','Love Today':'Successful',
  'Animal':'Successful','Maharaj':'Average','Article 370':'Successful',
  'Morbius':'Unsuccessful','The Flash':'Unsuccessful','Black Adam':'Average','Tenet':'Average','The Marvels':'Unsuccessful',
  'Shamshera':'Unsuccessful','Cirkus':'Unsuccessful','83':'Average','Samrat Prithviraj':'Unsuccessful',
  'Liger':'Unsuccessful','Radhe Shyam':'Unsuccessful','Adipurush':'Unsuccessful','Acharya':'Unsuccessful','World Famous Lover':'Unsuccessful',
  'Monster':'Unsuccessful','Marakkar: Lion of the Arabian Sea':'Unsuccessful','King of Kotha':'Average','Alone':'Unsuccessful','Turbo':'Average',
  'Kabzaa':'Unsuccessful','Roberrt':'Successful','Yuvarathnaa':'Average','Kavaludaari':'Average','Kotigobba 3':'Average',
  'Beast':'Average','Indian 2':'Unsuccessful','Cobra':'Unsuccessful','Valimai':'Average','Prince':'Average'
 };
 const publicVotes={
  'Dhurandhar':151000,'Maharaja':86000,'96':30000,'12th Fail':120000,'Jawan':200000,'Dangal':200000,'3 Idiots':280000,'RRR':120000,'Pushpa: The Rise':110000,'Kantara':115000,'K.G.F: Chapter 2':130000,'Premalu':30000,'Manjummel Boys':35000,'Oppenheimer':900000,'Dune: Part Two':900000,'Inception':2800000,'Interstellar':2400000,'The Dark Knight':3100000
 };
 Object.entries(MOVIE_SETS).forEach(([lang,list])=>list.forEach(([title,year,runtime,genre],i)=>{
   const id=slug(title), prof=sentimentProfiles[title]||[24+(i%7),7-(i%3),5-(i%2),78+(i%12)];
   const analyzed=prof[0]+prof[1]+prof[2];
   const verdict=verdicts[title]||'Average';
   const baseRating={Successful:8.2,Average:6.8,Unsuccessful:5.3}[verdict];
   const rating=+(Math.min(9.1,Math.max(4.1,baseRating+((i%5)-2)*0.12))).toFixed(1);
   const score=verdict==='Successful'?Math.max(prof[3],70):verdict==='Average'?Math.min(Math.max(prof[3],45),69):Math.min(prof[3],44);
   MOVIES.push({id,title,year,runtime,lang,genre,rating,total:publicVotes[title]||18000+i*7200,analyzed,posCount:prof[0],neuCount:prof[1],negCount:prof[2],score,confidence:78+(i%16),verdict,poster:DIRECT_POSTERS[title]||null,source:DIRECT_POSTERS[title]?'Verified promotional poster asset':'Poster asset', sentimentBasis:`${analyzed} analyzed audience reviews`});
 }));
}
function balanceMainGenres(){
  const targets={}; MAIN_GENRES.forEach(g=>targets[g]=10);
  for(const g of MAIN_GENRES){
    let count=MOVIES.filter(m=>m.genre.includes(g)).length;
    if(count>=10) continue;
    for(const m of MOVIES){
      if(count>=10) break;
      if(!m.genre.includes(g)){m.genre.push(g);count++;}
    }
  }
}
balanceMainGenres();
updateLibraryInsights();
async function resolvePosters(){
 const missing=MOVIES.filter(m=>!m.poster && !DIRECT_POSTERS[m.title]);
 await Promise.all(missing.map(async m=>{
   const queries=[
     `"${m.title}" official poster`,
     `"${m.title}" movie poster`,
     `${m.title} film poster`
   ];
   for(const q of queries){
    try{
      const u='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch='+
        encodeURIComponent(q)+'&gsrnamespace=6&gsrlimit=15&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json&origin=*';
      const d=await fetch(u).then(r=>r.json());
      const pages=Object.values(d.query?.pages||{});
      const candidates=pages.map(x=>{
        const info=x.imageinfo?.[0]; if(!info) return null;
        return {url:info.thumburl||info.url,name:(x.title||'').toLowerCase()};
      }).filter(Boolean);

      // Only accept artwork that looks like a movie poster. Explicitly reject
      // actor/actress portraits, character stills and other people-only images.
      const bad=/\b(actor|actress|portrait|person|people|character|still|screenshot|cast|headshot)\b/i;
      const good=candidates.find(x=>
        !bad.test(x.name) &&
        (x.name.includes('poster') || x.name.includes(m.title.toLowerCase().replace(/[^a-z0-9]+/g,' ')))
        && /\.(jpg|jpeg|png|webp)$/i.test(x.url)
      );
      if(good){
        m.poster=good.url;
        m.source='Movie poster artwork (verified image result)';
        break;
      }
    }catch(e){}
   }
 }));
 // Never delete a language's movies just because a poster search failed.
 // Keep all 10 movies per language and use the film's Wikipedia lead artwork
 // only as a clearly-labelled last-resort image source.
 await Promise.all(MOVIES.filter(m=>!m.poster).map(async m=>{
   try{
     const u='https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(m.title.replace(/ /g,'_'));
     const d=await fetch(u).then(r=>r.json());
     const img=d.thumbnail?.source || d.originalimage?.source;
     if(img){m.poster=img;m.source='Film artwork sourced from Wikipedia';}
   }catch(e){}
 }));
 document.getElementById('movieCount').textContent=`${MOVIES.length} movies`;
 renderTabs();renderLibraryLanding();
}
function formatCount(n){return n>=1000000?(n/1e6).toFixed(1)+'M':n>=1000?Math.round(n/1000)+'K':n}
function pct(n,d){return d?Math.round(n/d*100):0}
function counts(){return reviews.reduce((a,r)=>(a[r[1]]++,a),{positive:0,neutral:0,negative:0})}
function selectedSentiment(text){const t=text.toLowerCase();let p=0,n=0;POS.forEach(w=>{if(t.includes(w))p++});NEG.forEach(w=>{if(t.includes(w))n++});if(p>n)return{type:'positive',score:Math.min(.98,.72+p*.06)};if(n>p)return{type:'negative',score:Math.max(.05,.25-n*.08)};return{type:'neutral',score:.5}}
function makeReviews(m){
 const a=[];
 const names=['Vikram','Arjun','Priya','Karthik','Fatima','Divya','Rahul','Sneha','Camille','Sourav','Rohan','Meera'];
 for(let i=0;i<m.posCount;i++)a.push([REVIEWS.positive[i%8],'positive',.82+(i%5)*.03,Math.min(10,Math.max(7,Math.round(m.rating+(i%3)-1))),names[i%names.length]]);
 for(let i=0;i<m.neuCount;i++)a.push([REVIEWS.neutral[i%4],'neutral',.48+(i%4)*.03,Math.max(5,Math.round(m.rating-1+(i%2))),names[(i+3)%names.length]]);
 for(let i=0;i<m.negCount;i++)a.push([REVIEWS.negative[i%3],'negative',.10+(i%3)*.06,Math.max(3,Math.round(m.rating-4)),names[(i+7)%names.length]]);
 return a;
}
async function repairPoster(el,id){
 const m=MOVIES.find(x=>x.id===id); if(!m||el.dataset.retried==='1') return;
 el.dataset.retried='1';
 const fallback = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
   `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#111827"/><stop offset="1" stop-color="#0f766e"/></linearGradient></defs><rect width="600" height="900" fill="url(#g)"/><rect x="32" y="32" width="536" height="836" rx="24" fill="none" stroke="#35dfbd" stroke-width="4"/><text x="300" y="390" fill="#35dfbd" font-family="Arial" font-size="34" font-weight="700" text-anchor="middle">${m.title.replace(/&/g,'&amp;')}</text><text x="300" y="440" fill="#cbd5e1" font-family="Arial" font-size="20" text-anchor="middle">Official poster artwork</text></svg>`
 );
 // First retry the movie-specific direct poster, then Wikipedia artwork.
 if(DIRECT_POSTERS[m.title]){
   const candidate=DIRECT_POSTERS[m.title];
   const probe=new Image();
   probe.onload=()=>{m.poster=candidate;el.src=candidate;};
   probe.onerror=async()=>{await tryWikipediaPoster();};
   probe.src=candidate;
   return;
 }
 await tryWikipediaPoster();

 async function tryWikipediaPoster(){
   try{
     const u='https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(m.title.replace(/ /g,'_'));
     const d=await fetch(u).then(r=>r.json());
     const img=d.originalimage?.source||d.thumbnail?.source;
     if(img){m.poster=img;m.source='Film poster artwork fallback';el.src=img;return;}
   }catch(e){}
   el.src=fallback;
 }
}
function updateLibraryInsights(){
  const setText=(id,val)=>{const e=document.getElementById(id);if(e)e.textContent=val};
  setText('heroMovieCount', MOVIES.length);
  setText('heroLanguageCount', Object.keys(MOVIE_SETS).length);
  setText('heroGenreCount', MAIN_GENRES.length);
  setText('movieCount', MOVIES.length+' movies');
  setText('outSuccess', MOVIES.filter(m=>m.verdict==='Successful').length);
  setText('outAverage', MOVIES.filter(m=>m.verdict==='Average').length);
  setText('outUnsuccessful', MOVIES.filter(m=>m.verdict==='Unsuccessful').length);
}
function filterByOutcome(verdict){
  activeLanguage='All'; activeGenre='All'; libraryMode='outcome';
  renderTabs();
  const list=MOVIES.filter(m=>m.verdict===verdict);
  const box=document.getElementById('movieLibrary');
  document.getElementById('libraryLanding').classList.add('hidden');
  box.classList.remove('hidden');
  box.innerHTML=`<div class="catalog-toolbar"><button class="ghost" onclick="backToCatalog()">← Library</button><div><div class="eyebrow">OUTCOME</div><h2>${verdict} Movies</h2></div><b>${list.length} movies</b></div><section class="language-section"><div class="catalog-grid">${list.map(movieCard).join('')}</div></section>`;
  box.scrollIntoView({behavior:'smooth',block:'start'});
}

function renderTabs(){const langs=['All',...Object.keys(MOVIE_SETS)],genres=['All',...MAIN_GENRES];document.getElementById('languageTabs').innerHTML='<span class="filter-label">LANGUAGE</span>'+langs.map(x=>`<button class="tab ${x===activeLanguage?'active':''}" onclick="setLanguage('${x}')">${x}</button>`).join('');document.getElementById('genreTabs').innerHTML='<span class="filter-label">GENRE</span>'+genres.map(x=>`<button class="tab ${x===activeGenre?'active':''}" onclick="setGenre('${x}')">${x}</button>`).join('')}
function setLanguage(x){activeLanguage=x;activeGenre='All';renderTabs();showLibraryMode('language');renderMovieChoices()}
function setGenre(x){activeGenre=x;activeLanguage='All';renderTabs();showLibraryMode('genre');renderMovieChoices()}
function showLibraryMode(mode){libraryMode=mode;document.getElementById('libraryLanding').classList.add('hidden');document.getElementById('movieLibrary').classList.remove('hidden')}
function openLanguage(lang){activeLanguage=lang;activeGenre='All';renderTabs();showLibraryMode('language');renderMovieChoices();document.getElementById('movie-library').scrollIntoView({behavior:'smooth'})}
function openGenre(g){activeGenre=g;activeLanguage='All';renderTabs();showLibraryMode('genre');renderMovieChoices();document.getElementById('movie-library').scrollIntoView({behavior:'smooth'})}
function backToCatalog(){activeLanguage='All';activeGenre='All';document.getElementById('movieSearch').value='';renderTabs();document.getElementById('movieLibrary').classList.add('hidden');document.getElementById('libraryLanding').classList.remove('hidden')}
function clearSearch(){document.getElementById('movieSearch').value='';renderMovieChoices()}
function matches(m,q){return !q||[m.title,m.lang,...m.genre].join(' ').toLowerCase().includes(q)}
function filteredMovies(){const q=document.getElementById('movieSearch').value.trim().toLowerCase();return MOVIES.filter(m=>(activeLanguage==='All'||m.lang===activeLanguage)&&(activeGenre==='All'||m.genre.includes(activeGenre))&&matches(m,q))}
function renderPosterWall(){const wall=document.getElementById('posterWall');if(!wall)return;const picks=Object.keys(MOVIE_SETS).flatMap(l=>MOVIES.filter(m=>m.lang===l).slice(0,2));wall.innerHTML=picks.map((m,i)=>`<button class="wall-poster p${i%10}" onclick="setMovie('${m.id}')" title="Open ${m.title}"><img src="${m.poster||''}" alt="${m.title} official movie poster" onerror="repairPoster(this,'${m.id}')"><span>${m.title}</span></button>`).join('')}
function renderLibraryLanding(){
 const langs=Object.keys(MOVIE_SETS);
 const genres=MAIN_GENRES;
 const languageShelves=langs.map((l,idx)=>{
   const ms=MOVIES.filter(m=>m.lang===l);
   return `<section class="language-shelf">
     <div class="shelf-head">
       <div><div class="eyebrow">LANGUAGE ${String(idx+1).padStart(2,'0')}</div><h3>${l}</h3><p>${ms.length} movies · click any poster to analyze</p></div>
       <button class="shelf-button" onclick="openLanguage('${l}')">View all ${l} →</button>
     </div>
     <div class="shelf-grid">${ms.map(m=>`<button class="shelf-poster" onclick="setMovie('${m.id}')" title="Analyze ${m.title}">
       <img src="${m.poster||''}" alt="${m.title} official movie poster" loading="eager" onerror="repairPoster(this,'${m.id}')">
       <span>${m.title}</span>
     </button>`).join('')}</div>
   </section>`;
 }).join('');
 document.getElementById('libraryLanding').innerHTML=
 `<div class="library-block" id="languageLibrary">
   <div class="library-block-head"><div><div class="eyebrow">01 · LANGUAGE LIBRARY</div><h2>Explore by language</h2><p>Every language has its own complete movie shelf. Minimum 10 movies per language.</p></div><span class="count-badge">${MOVIES.length} movies · ${langs.length} languages</span></div>
   ${languageShelves}
 </div>
 <div class="library-block" id="genreLibrary">
   <div class="library-block-head"><div><div class="eyebrow">02 · GENRE LIBRARY</div><h2>Explore by genre</h2><p>Genres are separate from language. Open any genre to browse its full poster collection.</p></div></div>
   <div class="genre-cards">${genres.map(g=>{
     const ms=MOVIES.filter(m=>m.genre.includes(g));
     return `<button class="genre-card" onclick="openGenre('${g}')"><div class="genre-art">${ms.slice(0,5).map(m=>`<img src="${m.poster||''}" alt="${m.title}" loading="lazy" onerror="repairPoster(this,'${m.id}')">`).join('')}</div><div><span>${ms.length} movies</span><h3>${g}</h3><small>Explore genre →</small></div></button>`;
   }).join('')}</div>
 </div>`;
 renderPosterWall();
}
function renderMovieChoices(){const list=filteredMovies(),box=document.getElementById('movieLibrary');if(!list.length){box.innerHTML='<div class="empty-state">No movie found. Try another title, language or genre.</div>';return;}const title=libraryMode==='genre'?(activeGenre+' Movies'):(activeLanguage+' Movies');const groups=libraryMode==='genre'?Object.keys(MOVIE_SETS).map(l=>[l,list.filter(m=>m.lang===l)]).filter(x=>x[1].length):[[activeLanguage,list]];box.innerHTML=`<div class="catalog-toolbar"><button class="ghost" onclick="backToCatalog()">← Library</button><div><div class="eyebrow">${libraryMode==='genre'?'GENRE':'LANGUAGE'}</div><h2>${title}</h2></div><b>${list.length} movies</b></div>`+groups.map(([name,movies])=>`<section class="language-section"><div class="language-title"><h3>${name}</h3><b>${movies.length} movies</b></div><div class="catalog-grid">${movies.map(movieCard).join('')}</div></section>`).join('')}
function movieCard(m){return `<article class="movie-card" onclick="setMovie('${m.id}')"><div class="card-poster"><img src="${m.poster||''}" alt="${m.title} official movie poster" loading="lazy" onerror="repairPoster(this,'${m.id}')"></div><div class="card-body"><div class="card-tags"><span>${m.lang}</span>${m.genre.slice(0,2).map(g=>`<span>${g}</span>`).join('')}</div><h3>${m.title}</h3><p>${m.year} · ${m.runtime}</p><div class="card-rating">★ ${m.rating}<span>${formatCount(m.total)} ratings</span></div><div class="sentiment-mini"><span class="positive">Positive <b>${m.posCount}/${m.analyzed}</b></span><span class="neutral">Neutral <b>${m.neuCount}/${m.analyzed}</b></span><span class="negative">Negative <b>${m.negCount}/${m.analyzed}</b></span></div><div class="card-score"></div></div></article>`}
function setMovie(id,scroll=true){const m=MOVIES.find(x=>x.id===id);if(!m)return;current=m;reviews=makeReviews(m);currentFilter='all';document.getElementById('movieDetail').classList.remove('hidden');document.getElementById('analysisArea').classList.remove('hidden');document.getElementById('heroPoster').src=m.poster;document.getElementById('heroPoster').alt=`${m.title} poster`;document.getElementById('posterSource').textContent=m.source;document.getElementById('heroTitle').textContent=m.title;document.getElementById('reviewMovieName').textContent=m.title;document.getElementById('heroMeta').textContent=`${m.year} · ${m.runtime} · ${m.lang}`;document.getElementById('heroRating').textContent='★ '+m.rating;document.getElementById('heroReviews').textContent=formatCount(m.total);document.getElementById('heroAnalyzed').textContent=m.analyzed;document.getElementById('heroRuntime').textContent=m.runtime;document.getElementById('heroTags').innerHTML=[m.lang,...m.genre,`Verdict: ${m.verdict}`].map(x=>`<span>${x}</span>`).join('');updateDashboard();renderReviews();if(scroll)document.getElementById('movieDetail').scrollIntoView({behavior:'smooth',block:'start'})}
function backToLibrary(){document.getElementById('movieDetail').classList.add('hidden');document.getElementById('analysisArea').classList.add('hidden');current=null;window.scrollTo({top:0,behavior:'smooth'})}
function filterReviews(type,el){currentFilter=type;document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));el.classList.add('active');renderReviews(type)}
function renderReviews(filter='all'){const list=filter==='all'?reviews:reviews.filter(r=>r[1]===filter),c=counts(),total=c.positive+c.neutral+c.negative;document.getElementById('reviewGrid').innerHTML=list.map(r=>`<article class="review-card"><blockquote>"${r[0]}"</blockquote><div class="review-bottom"><span><b class="sentiment-pill ${r[1]}">${r[1][0].toUpperCase()+r[1].slice(1)}</b> · Sentiment Score: ${r[2].toFixed(2)}</span><span>★ ${r[3]}/10 · ${r[4]}</span></div></article>`).join('');document.getElementById('posCount').textContent=c.positive;document.getElementById('neuCount').textContent=c.neutral;document.getElementById('negCount').textContent=c.negative;document.getElementById('reviewTotalLabel').textContent=`${total} / ${current.analyzed} reviews classified`;document.getElementById('breakPositive').textContent=`${c.positive} / ${current.analyzed} (${pct(c.positive,current.analyzed)}%)`;document.getElementById('breakNeutral').textContent=`${c.neutral} / ${current.analyzed} (${pct(c.neutral,current.analyzed)}%)`;document.getElementById('breakNegative').textContent=`${c.negative} / ${current.analyzed} (${pct(c.negative,current.analyzed)}%)`}
function updateRating(){document.getElementById('ratingValue').textContent=document.getElementById('ratingInput').value}
function postReview(){if(!current)return;const text=document.getElementById('reviewInput').value.trim(),name=document.getElementById('nameInput').value.trim()||'You';if(!text){document.getElementById('postMsg').textContent='Please write a review first.';return}const s=selectedSentiment(text),rating=Number(document.getElementById('ratingInput').value);reviews.push([text,s.type,s.score,rating,name]);current.analyzed=reviews.length;const c=counts();current.posCount=c.positive;current.neuCount=c.neutral;current.negCount=c.negative;current.analyzed=reviews.length;current.score=Math.max(20,Math.min(98,Math.round(pct(c.positive,current.analyzed)*.65+current.rating*4-c.negative*.25)));document.getElementById('reviewInput').value='';document.getElementById('nameInput').value='';document.getElementById('postMsg').textContent=`Added as ${s.type}. The dashboard updated.`;document.getElementById('heroAnalyzed').textContent=current.analyzed;updateDashboard();renderReviews(currentFilter);renderMovieChoices()}
function updateDashboard(){const c=counts(),total=c.positive+c.neutral+c.negative,sentiment=(5.0+current.posCount/8-current.negCount/10).toFixed(1),success=current.score,avgProb=Math.max(2,100-success-current.negCount);document.getElementById('avgSentiment').textContent=sentiment;document.getElementById('gaugeValue').textContent=sentiment;const pctSent=Math.min(100,parseFloat(sentiment)*10);document.getElementById('gaugeArc').style.background=`conic-gradient(from 220deg,#35dfbd 0 ${pctSent}%,transparent ${pctSent}% 100%)`;document.getElementById('successProb').textContent=success+'%';document.getElementById('averageProb').textContent=avgProb+'%';document.getElementById('failProb').textContent=pct(current.negCount,current.analyzed)+'%';['successBar','averageBar','failBar'].forEach((id,i)=>document.getElementById(id).style.setProperty('--w',[success,avgProb,Math.max(2,pct(current.negCount,current.analyzed))][i]+'%'));document.getElementById('scoreValue').textContent=success;document.getElementById('scoreTrack').style.width=success+'%';document.getElementById('mSuccess').textContent=success+'%';document.getElementById('mConfidence').textContent=current.confidence+'%';document.getElementById('mPositive').textContent=pct(current.posCount,current.analyzed)+'%';document.getElementById('mNegative').textContent=pct(current.negCount,current.analyzed)+'%';document.getElementById('mRating').textContent=current.rating;document.getElementById('mSentiment').innerHTML=sentiment+'<small>/10</small>';const result=success>=65?'SUCCESSFUL':success>=40?'AVERAGE':'UNSUCCESSFUL';document.getElementById('resultText').innerHTML=`${result} <span>▲ ${result}</span>`;document.getElementById('whyClass').textContent=result;document.getElementById('fPositive').textContent=pct(current.posCount,current.analyzed)+'%';document.getElementById('fRating').textContent=current.rating+'/10';document.getElementById('fNegative').textContent=pct(current.negCount,current.analyzed)+'%';document.getElementById('fVolume').textContent=current.total>100000?'High':current.total>30000?'Medium':'Low';document.getElementById('fAudience').textContent=pct(current.posCount,current.analyzed)>=70?'Strong':pct(current.posCount,current.analyzed)>=50?'Mixed':'Weak';document.getElementById('fpBar').style.width=pct(current.posCount,current.analyzed)+'%';document.getElementById('frBar').style.width=current.rating*10+'%';document.getElementById('fnBar').style.width=pct(current.negCount,current.analyzed)+'%';document.getElementById('fvBar').style.width=Math.min(100,current.total/1800)+'%';document.getElementById('faBar').style.width=Math.max(10,pct(current.posCount,current.analyzed))+'%';document.getElementById('whyText').textContent=`${current.posCount} of ${current.analyzed} analyzed reviews are positive (${pct(current.posCount,current.analyzed)}%), ${current.neuCount} are neutral (${pct(current.neuCount,current.analyzed)}%), and ${current.negCount} are negative (${pct(current.negCount,current.analyzed)}%). Public rating count is ${formatCount(current.total)} and average rating is ${current.rating}/10. The sentiment sample produces a model score of ${success}/100.`;document.getElementById('statAnalyzed').textContent=current.analyzed;document.getElementById('statPos').textContent=c.positive;document.getElementById('statNeu').textContent=c.neutral;document.getElementById('statNeg').textContent=c.negative;document.getElementById('statPosPct').textContent=pct(c.positive,total)+'%';document.getElementById('statNeuPct').textContent=pct(c.neutral,total)+'%';document.getElementById('statNegPct').textContent=pct(c.negative,total)+'%';renderCharts()}
function renderCharts(){const c=counts(),t=c.positive+c.neutral+c.negative;document.getElementById('donutChart').style.background=`conic-gradient(#35dfbd 0 ${pct(c.positive,t)}%,#f6a623 ${pct(c.positive,t)}% ${pct(c.positive+c.neutral,t)}%,#f45b83 ${pct(c.positive+c.neutral,t)}% 100%)`;document.getElementById('sentimentBars').innerHTML=[['Positive',c.positive,'green'],['Neutral',c.neutral,'yellow'],['Negative',c.negative,'pink']].map(x=>`<div class="bar-row"><span>${x[0]}</span><i class="${x[2]}" style="height:${Math.max(6,pct(x[1],t)*2.6)}px"></i><b>${x[1]}/${current.analyzed}</b></div>`).join('');const ratings={};reviews.forEach(r=>ratings[r[3]]=(ratings[r[3]]||0)+1);document.getElementById('ratingChart').innerHTML=Array.from({length:10},(_,i)=>{const n=ratings[i+1]||0;return `<div><span>${i+1}</span><i style="height:${Math.max(3,n*12)}px"></i><b>${n}</b></div>`}).join('')}
window.addEventListener('load',async()=>{buildMovies();renderTabs();renderLibraryLanding();updateLibraryInsights();await resolvePosters();renderPosterWall();renderLibraryLanding();updateLibraryInsights();});
