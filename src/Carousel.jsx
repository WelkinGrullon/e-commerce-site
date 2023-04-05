import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
function UncontrolledExample() {
  return (
    <Carousel variant='danger'  style={{}}>
      <Carousel.Item className='' >
        <img
          src="https://www.mh2g.com/v/Main_categories/img/modern-interior-design-category.jpg"
          alt="First slide"
          className='d-block w-100 h-80'
          style={{maxHeight:'700px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          src="https://mainstreetdesignbuild.com/wp-content/uploads/2019/07/Michigan-Design-Interior-Slider-1920x700.jpg"
          alt="Second slide"
          className='d-block w-100'
          style={{maxHeight:'700px'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img

src="https://s7d1.scene7.com/is/image/interfaceprd/FutureWoven_Mica_%20NaturalWoodgrains_Beech_Ashlar:c1920x700"
          alt="Third slide"
          className='d-block w-100'
          style={{maxHeight:'700px'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;