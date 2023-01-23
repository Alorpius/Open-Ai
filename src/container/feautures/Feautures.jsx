
import { Feauture } from '../../component'
import './feautures.css'

const featureData=[
  {
    id:1,
    title:'Home',
    text:'we take the opinions of others to develop and maintain our existing '
  },
  {
    id:2,
    title:'Fall',
    text:'As a team of learned personnel, we pride our knowledgeability over our personal interest'
  },
  {
    id:3,
    title:'colunm',
    text:'we understand that knowlege is power hence we are able to gather a variety of experts from different walks of life and domains'
  },
  {
    id:4,
    title:'Base',
    text:'we understand that knowlege is power hence we are able to gather a variety of experts from different walks of life and domains'
  }
]
const Feautures = () => {

return (
    <div className='gpt3__features section__padding' id='feautures'>
    <div className='gpt3__features-heading'>
       <h1 className='gradient-text'>The future is now and you just need to realise it. step into future today & make it happen</h1>
       <p>Request access to get started</p>
    </div>
    <div className='gpt3__features-container'>
     {featureData.map((item)=>(
      <Feauture title={item.title} text={item.text} key={item.id}/>
     ))}
    </div>
  </div>
   
  )
}

export default Feautures
