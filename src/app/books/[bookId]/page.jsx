export const generateStaticParams = async () => {
    const data = await fetch("http://localhost:5000/books")
    const books = await data.json();


    return books.map(book => ({bookId: book.id}))
}

const BookDetailsPage = async ({params}) => {
    const {bookId} = await params;

    const data = await fetch(`http://localhost:5000/books/${bookId}`);
    const {title, author, price} = await data.json();
    return (
        <div>
            <h2>Book Details: {bookId}</h2>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default BookDetailsPage;