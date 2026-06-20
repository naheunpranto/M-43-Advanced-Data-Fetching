import BookCard from "@/components/BookCard";
 
/**
 * cache: no-store -> it wil fetch the data on every request, and it will not cache the data. SSR
 * 
 * cache: force-cache -> it will cache the data, and it will not the fetch the data on every request. SSG
 * 
 * revalidate: 20 -> It will cache the data for 20 seconds, and it will fetch the data after 20 seconds. ISR
 * 
 */

 

const BooksPage = async() => {

    const data = await fetch("http://localhost:5000/books", {next: {revalidate: 9}});
    const books = await data.json();

    return (
        <div >
            <h2>Books: {books.length}</h2>
            <div className="grid grid-cols-3 container mx-auto gap-4">
                {
                    books.map(book => <BookCard key={book.id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default BooksPage;