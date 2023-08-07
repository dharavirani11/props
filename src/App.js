import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Img from './Img';
import Icon from './Icon';
import './css/all.min.css'; 

var nav = [


  { 'name': "Home" },
  { 'name': "courses" },
  { 'name': "activites" },
  { 'name': "blog" },
  { 'name': "know us" },
  { 'name': "get in touch" },
  { 'name': "student zone" },

]
var img = [

  { img: require('./imgs/asset 2.jpeg') },
  { img: require('./imgs/asset 3.jpeg') },
  { img: require('./imgs/asset 4.jpeg') },
  { img: require('./imgs/asset 5.jpeg') }
]
var card = [
  {
    cards: require('./imgs/asset 26.jpeg'),
    n1: 'Development courses', n2: 'Know More..!'
  },
  { cards: require('./imgs/asset 17.jpeg'), n1: 'desiging courses', n2: 'Know More..!' },
  { cards: require('./imgs/asset 23.jpeg'), n1: ' programming IT', n2: 'Know More..!' },
  { cards: require('./imgs/asset 19.jpeg'), n1: 'trendy courses', n2: 'Know More..!' },
  { cards: require('./imgs/asset 32.jpeg'), n1: 'civil-mech. engineering', n2: 'Know More..!' },
  { cards: require('./imgs/asset 36.jpeg'), n1: 'buisness development', n2: 'Know More..!' },
 
]
var icon = [
  {icon:require('./l1.png'),i1:'Industry Experts As Trainers',i2:'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.'},
  {icon:require('./imgs/l2.png'),i1:'Latest Curriculum',i2:'We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.'},
  {icon:require('./imgs/l3.png'),i1:'Latest Technology',i2:'We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.'},
  {icon:require('./imgs/l4.png'),i1:'Interview Assistance',i2:'At the end of each training,our training instructor will go through the possible technical questions you may be asked.'},
  {icon:require('./imgs/l5.png'),i1:'Free Upgradation',i2:'We will be provided free upgradation for any newer version of the course you have.'},
  {icon:require('./imgs/l6.png'),i1:'Lifetime Support',i2:'We will provide you lifetime support on all the courses you learned from us.'},

]



function App() {
  return (
    <div className="App">
      <Home />
      <div>
        <Container>
          <Row className='justify-content-between'>
            <Col lg='2'>
              <div className='logo'>
                <a href='#'><img src={require('./imgs/asset 0.png')}></img></a>
              </div>
            </Col>
            <Col lg='10'>

              <nav>
                <ul>
                  <li>
                 
                   
                      {
                        nav.map((item) => {
                          return (
                            <Home Name={item.name} />
                          )
                        })
                      }
                    
                    </li>

                </ul>
              </nav>
            </Col>
          </Row>

        </Container>
          <div>
            <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} autoplayTimeout={3000} items={1} touchDrag={true} autoplay={true} >

              {
                img.map((item) => {
                  return (
                    <Img Img={item.img}  />
                  )
                })
              }

            </OwlCarousel>
            </div>
        <Container>
          <Row className='g-4'>
            
              {
                card.map((item) => {
                  return (
                  <Col lg='4' >
                    <About Card={item.cards} N1={item.n1} N2={item.n2} />
                    </Col>
                  )
                })
              }

            
          </Row>
          <Row>
            {
              icon.map((item)=>{
                return(
                  <Col lg='4'>
                    <Icon I={item.icon} I1={item.i1} I2={item.i2}/>
                  
                  </Col>
                )
              })
            }
          </Row>
         
        </Container>



      </div>
    </div>
  );
}

export default App;
