import { Controller, Get, Param, Post, Body, Query, Delete, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

    constructor(private readonly  booksService: BooksService) { }

    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Get(':bookID')
    async getBook(@Param('bookID', new ParseIntPipe()) bookID) {
        const book = await this.booksService.getBook(bookID);
        return book;
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
    }

}
