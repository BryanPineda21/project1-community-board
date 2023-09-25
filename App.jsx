import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
<div className="App"> 


<h1 className='Header'>Non-Profit organizations</h1>


<div className = "card-container">
<div className = "container">
        <Card
        image = "https://files.elfsightcdn.com/9efb0de7-35ff-45c1-a138-9b3c7e423649/296a8231-9f63-44ee-be40-c6790664afc0/Supri--9-of-9--2.jpg"
        organization = "SeaTrees"
        type = "Climate Action"
        link = "https://sea-trees.org/?gclid=CjwKCAjw38SoBhB6EiwA8EQVLq8RgFPM18jdWwceBAOpEEEgySq89S9Y5GLLixUuih8xRZlSUHYrrxoCaNQQAvD_BwE"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://www.adventurescientists.org/wp-content/uploads/2022/03/EBW.png"
        organization = "AScientists"
        type = "Sustainability"
        link = "https://www.adventurescientists.org/?gclid=CjwKCAjw38SoBhB6EiwA8EQVLmFTNGq0sP4bORLFsrrIv6dsktjTQoP1MoZaBXE5Av87nrPvUxr6uxoCj1wQAvD_BwE"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://www.politico.eu/cdn-cgi/image/width=1160,height=870,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/06/21/GettyImages-1252629157-scaled.jpg"
        organization = "WWF"
        type = "wildlife"
        link = "https://www.worldwildlife.org/"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://i2.wp.com/thekashmirhorizon.com/wp-content/uploads/Red-Cross.jpg?fit=600%2C602&ssl=1"
        organization = "RedCross"
        type = "Health"
        link = "https://www.redcross.org/"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://media.licdn.com/dms/image/D4E22AQGGpwDqIAYvSg/feedshare-shrink_800/0/1688042334610?e=1697068800&v=beta&t=qav6HL-8bJpzu4EXG4ZjdXHVdt29fE00Qt5WEQMyAfA"
        organization = "CityHarvest"
        type = "Nutrition"
        link = "https://www.cityharvest.org/"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://yt3.googleusercontent.com/ytc/AOPolaRwKMVFBFu6T98tUc9-fkiGdqmn1JMcs1mSLl6BwA=s900-c-k-c0x00ffffff-no-rj"
        organization = "IRC"
        type = "Humanitarian"
        link = "https://www.rescue.org/"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://goodwillng.org/wp-content/uploads/2018/05/Buckhead-Store.jpg"
        organization = "GoodWill"
        type = "Clothes donation"
        link = "https://www.goodwill.org/"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://charity.org/wp-content/uploads/2021/06/RS56521_focus-59215-resized-logo.jpg"
        organization = "CFL"
        type = "Children Aid"
        link = "https://childfundalliance.org/"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://cdn.britannica.com/37/191937-050-3B64C5CC/Polar-bear-ice-floes-waters-Arctic-Norway.jpg"
        organization = "VolvoF"
        type = "Climate Action"
        link = "https://volofoundation.org/solutions/?gad=1&gclid=CjwKCAjw38SoBhB6EiwA8EQVLjoRg6fOhDnWOI0MccYyVUFA2CzQSqO5YhgbKIL0_61thyVD7FBOnRoCvIkQAvD_BwE#"
        />
  </div>

  <div className = "container">
        <Card
        image = "https://static.wixstatic.com/media/08b5a5_830c447a15c443269d266a699f2cacc4~mv2.png/v1/fit/w_2500,h_1330,al_c/08b5a5_830c447a15c443269d266a699f2cacc4~mv2.png"
        organization = "YCCB"
        type = "Climate Action"
        link = "https://www.youthclimatecorps.com/?gad=1&gclid=CjwKCAjw38SoBhB6EiwA8EQVLkQD2OGdqgmTIr4kfvEKbTFv63dyNfHHkBU39VZIR1NAqPOwjeoyZBoCnY8QAvD_BwE"
        />
  </div>














        </div>
        </div>  

  )
}

export default App;
