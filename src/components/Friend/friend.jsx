import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function Friend() {
  const { friend } = useParams();
  const [chosenFriend, setChosenFriend] = useState('');

  useEffect(() => {
    const friends = [
      {
        name: 'John',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW64nUiIKol3JaNKYQwOCPfShCLJquXjN5A&usqp=CAU',
        age: 21,
        country: 'Netherlands'
      },
      {
        name: 'Alex',
        img: 'https://admin.savills.asia/_images/alex-sarroff-landscape21.jpg',
        age: 35,
        country: 'USA'
      },
      {
        name: 'Martha',
        img: 'https://www.hellomagazine.com/imagenes/film/20211026124905/alex-scott-who-do-you-think-you-are-family-details/0-602-776/alex-scott-t.webp?filter=high',
        age: 25,
        country: 'United Kingdom'
      },
    ];
    const getFriend = friends.find((person) => person.name === friend);
    if (getFriend) {
      setChosenFriend(getFriend);
    }
  }, [friend]);


  return (
    <div>
        <img src={chosenFriend.img} alt={chosenFriend.name} />
        <h4>Name:</h4>
        <p>{chosenFriend.name}</p>
        <h4>AGe:</h4>
        <p>{chosenFriend.age}</p>
        <h4>Country:</h4>
        <p>{chosenFriend.country}</p>
    </div>
  )
}