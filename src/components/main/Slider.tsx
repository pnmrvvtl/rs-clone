import React from 'react'
import Carousel from 'react-material-ui-carousel'
import jane from '../../assets/image/jane.jpg'
import chist from '../../assets/image/christine.jpg'
import calvin from '../../assets/image/calvin.jpg'
import terri from '../../assets/image/terri.jpg'
import { Paper, Button, Slide } from '@mui/material'
import styles from '../../pages/main-page/main-page.module.scss'

// 

//     return (
//       <section className="members">
//         <h2 className="members-title">Join thousands of successful members</h2>
//         <div className="members-slider">
//           <Carousel>
//           {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }


//       </Carousel>
//       </div>
//       </section >
//     )
//   }

type Custom = {
  photo: string,
  name: string,
  description: string
}


export default function Slider() {
  const items = [
    {
      photo: `${jane}`,
      comment: 'I feel better than ever!',
      description: "Jane, 49, lost 250 pounds (113 kilos)"
    },
    {
      photo: `${chist}`,
      comment: 'Healthy and happy with a new passion',
      description: 'Christine 50, lost 80 pounds (36 kilos)'
    },
    {
      photo: `${calvin}`,
      comment: 'Health diet saved my life”',
      description: 'Calvin 40, lost 160 pounds (72 kilos)'
    },
    {
      photo: `${terri}`,
      comment: 'I feel 30 years younger than I am!',
      description: 'Terri 64, lost 200 pounds (90 kilos)'
    }
  ]

  return (
    <section className={styles.members}>
      <h2 className={styles["members-title"]}>Join thousands of successful members</h2>
      <div className={styles["members-slider"]}>
        <Carousel
          autoPlay={false}
          animation={'slide'}
          duration={700}
          // NavButton={({onClick, style}) => {
          //   return (
          //     <Button onClick={() => onClick()} style={{right: 5}}>
          //     </Button>
          // )
          // }}
          navButtonsProps={{
            style: {
              backgroundColor: 'rgba(149, 149, 149)',
              borderRadius: 20,
              left: 10,
            }
          }}
          navButtonsAlwaysVisible={true}>
          {
            items.map((item, i) => (
              <div className={styles.member} key={i}>
                <img className={styles["member-img"]} src={item.photo} />
                <div className={styles["member-info"]}>
                  <div className={styles["member-name"]}>{item.description}</div>
                  <div className={styles["member-comment"]}>{item.comment}</div>
                  </div>
              </div>))
          }
        </Carousel>
      </div>
    </section>
  )
}

function Item(props: Custom) {
  return (
    <Paper>
      <h2>{props.name}</h2>
      <p>{props.description}</p>


    </Paper>
  )
}
