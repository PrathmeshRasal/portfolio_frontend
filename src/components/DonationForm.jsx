// import { useState } from "react"

// function DonationForm()
// {
//     const [username,setUsername] = useState('');
//     const [amount,setAmount] = useState('');
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       console.log('Username:', username);
//       console.log('Amount:', amount);

//       const data = { username, amount };
//       try {
//         // Make the POST request to the API
//         const response = await fetch('http://localhost:3001/api/store', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });
      

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Data stored successfully:', result);
//         alert(result.message);
//       } else {
//         console.error('Failed to store data:', result.error);
//         alert(result.error);
//       }

//     }
//         catch{
//           console.error('Error:', error);
//           alert(error);
//         }
//     };
   
//   return (
//    <form onSubmit={handleSubmit}>
//     <label>Username:</label>
//     <input type="text" placeholder="name" value={username} onChange={(e)=>setUsername(e.target.value)} />
//     <label>Amount:</label>
//     <input type="number" placeholder="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
//     <button type="submit">Submit</button>
//    </form>
    
//   )
// }

// export default DonationForm




import { useState } from "react";

function ProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted

    // Ensure both title and description are filled before submission
    if (!title || !description || !image) {
      alert("Please fill out all fields, including the image.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image); // Attach the image file

    try {
      // Make the POST request to the API
      const response = await fetch("http://localhost:3001/add-project", {
        method: "POST",
        body: formData, // Send formData for image upload
      });

      const result = await response.json(); // Parse response JSON

      if (response.ok) {
        console.log("Project stored successfully:", result);
        alert(result.message);
        // Reset form after successful submission
        setTitle("");
        setDescription("");
        setImage(null);
      } else {
        console.error("Failed to store project:", result.error);
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while storing the project.");
    } finally {
      setLoading(false); // Stop loading after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>Description:</label>
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label>Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default ProjectForm;
