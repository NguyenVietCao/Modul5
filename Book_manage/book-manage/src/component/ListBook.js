import React,{useState,useEffect} from 'react';
import axios from 'axios';


const ListBook = () => {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(' http://localhost:8080/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Library</h1>
      <button onClick={() => window.location.href = '/new'}>Add a new Book</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => window.location.href = `/edit/${book.id}`}>Edit</button>
                {/* <button onClick={() => handleDelete(book.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListBook;