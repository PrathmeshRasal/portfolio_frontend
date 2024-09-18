import { useState } from "react"

function DonationForm()
{
    const [username,setUsername] = useState('');
    const [amount,setAmount] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Username:', username);
      console.log('Amount:', amount);

      const data = { username, amount };
      try {
        // Make the POST request to the API
        const response = await fetch('http://localhost:3001/api/store', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      

      if (response.ok) {
        const result = await response.json();
        console.log('Data stored successfully:', result);
        alert(result.message);
      } else {
        console.error('Failed to store data:', result.error);
        alert(result.error);
      }

    }
        catch{
          console.error('Error:', error);
          alert(error);
        }
    };
   
  return (
   <form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input type="text" placeholder="name" value={username} onChange={(e)=>setUsername(e.target.value)} />
    <label>Amount:</label>
    <input type="number" placeholder="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
    <button type="submit">Submit</button>
   </form>
    
  )
}

export default DonationForm