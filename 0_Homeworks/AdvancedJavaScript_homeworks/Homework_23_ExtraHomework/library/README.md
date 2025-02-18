# Task:
Make a website for a library that will have forms for entry and display of books.

## Definitions
There are only two types of books that will be used in the libraries - Novels, and Anthologies

A Novel consists of:
- Title of the novel
    - The title of the novel is a simple string
- Author of the novel
    - The author of the novel is a simple string. There are no novels that have multiple authors.
- Publisher of the novel
    - The name of the publishing company that published the novel. Simple string.
- Year of publication
    - The year is a number in the range 1900 - current year. The value of the current year should not be hardcoded
- Length in pages
    - Number in the range 1 - 1000
- Series
    - Name of the series the novel belongs to (if any)
- Series Number
    - The number of the book within 
- 13-digit ISBN
    - The ISBN is a string of 13 digits (it's *not* a number).
- Review
    - A longer text.

An anthology consists of:
- Title of the anthology
    - Same restriction as title of the novel.
- Editor of the anthology
    - Same restriction as a novel's author
- Publisher of the novel
    - Same restriction as a novel's publisher
- Year of publication
    - Same restriction as a novel's year of publication
- Length in pages
    - Same restriction as a novel's Length
- Stories included
    - Array of stories that are included in the anthology
- 13-digit ISBN
    - Same restriction as a novel's ISBN
- Review
    - A longer text.

A story consists of:
 - Title of the story
    - Same restriction as title of a novel.
 - Author of the story
    - Same restriction as author of a novel.
 - Whether the story is original to the anthology
    - Boolean field (true if the story is original, false otherwise)


## Book entry
When entering a new book we need to:
- Select the type of book we need to enter.
    - One way: have a select box to select novel / anthology, and display fields accordingly
    - Another way: have two separate editors, that have different buttons that invoke them

If novel is selected:
- enter the novel's title (short text)
- enter the novel's author (short text)
- enter the novel's publisher (short thext)
    - **Bonus 1** The name of the publisher is chosen from a predefined list 
- enter the year of publication 
- enter the length in pages
- enter the name of the novel series
- enter the series number
    - It's only possible to enter a series number if a series name is entered.
- enter the ISBN
    - The ISBN contains *only* numbers. Allow only such strings to be entered.
    - **Bonus 2** Verify that the ISBN is valid using the [validation algorithm](https://www.wikiwand.com/en/International_Standard_Book_Number#/ISBN-13_check_digit_calculation)
- enter the review

A novel must have a Title and an Author, everything else is optional.

If anthology is selected:
- enter the anthology's title (short text)
- enter the anthology's editor (short text)
- enter the anthology's publisher (short thext)
- enter the year of publication 
- enter the length in pages
- enter the stories in the anthology
    - already entered stories should be constantly visible
    - to enter a new story the author and title are mandatory.
- enter the ISBN
- enter the review

An anthology must have a Title and an Editor, as well at least 2 stories, everything else is optional.

When a new book is being entered, the library should not be visible.
When a book is successfully saved, the library should be displayed
It should be possible to access the library without entering a book, effectively canceling the entry.

## Library view
The library should be shown in a tabular way, with a header and the following columns:
- Automatically generated ID number
- Book title
- Principal author (Author for novels, Editor for anthologies)
- Publishing information
    - The format should be Year-of-publication (Publisher-Name), e.g. 2015 (Del Rey Books) for [Uprooted](https://www.goodreads.com/book/show/22544764-uprooted)
- Length
- Additional information
    - If a novel is not part of a series, the column is empty
    - If a novel is part of a series, display "*series (#series-number)*", e.g Discworld (#13) for [Small Gods](https://www.goodreads.com/book/show/386374.Small_Gods)
    - **Bonus 3** display the series-number using roman numerals, e.g Discworld (XIII) for [Small Gods](https://www.goodreads.com/book/show/386374.Small_Gods)
    - If the book is an anthology and all stories have the same writer, display "*X* stories by *author-name*", i.e. 24 stories by Neil Geiman for [Trigger Warning](https://www.goodreads.com/book/show/22522808-trigger-warning)
    - **Bonus 4** if the number should be singular (1, 21, and so on) write "story" instead of stories.
    - If an anthology has multiple authors display "*X* stories by *an-author* and others", e.g. display "13 stories by Chen Qiufan and others" for [Invisible Planets](https://www.goodreads.com/book/show/28220730-invisible-planets)
    - **Bonus 5** If an anthology has multiple authors display "*X* stories by *Y* authors", e.g. display "13 stories by 7 authors" for [Invisible Planets](https://www.goodreads.com/book/show/28220730-invisible-planets)
    - **Bonus 6** If an anthology has original stories, also display "*X* original stories" in parenthesis
- ISBN
- Review 
    - If the review have 50 or less characters it should be shown in full
    - if the review have more than 50 characters, only the first 47 characters should be shown, followed by three character ellipsis.
    - **Bonus 7** If ellipsis are shown, the last word should be shown in full (should not be cut in half)
- Action (button or link) for book deletion. When the action is executed, the user should be presented with a confirmation dialog. If a confirmation is received, the book is deleted.

The library should show at most 10 book entries at a time. It should display next / previous buttons to display the next or previous page respectively.  
All column headers except "Review" should be clickable, and clicking on a column header should sort the list of books according to the following criteria:
- ID number sorts by the ID number
- Book Name sorts by the book title
- Principal author should sort by the principal author (author for novels, editor for anthologies)
- Publishing information should sort by year of publication, then by publisher name
- Additional information should sort by
    - Any novel is ahead of any anthology (i.e. [Uprooted](https://www.goodreads.com/book/show/22544764-uprooted) before [Invisible Planets](https://www.goodreads.com/book/show/28220730-invisible-planets))
    - Any novel without a series is ahead of any novel with a series (i.e. [2312](https://www.goodreads.com/book/show/11830394-2312) before [Small Gods](https://www.goodreads.com/book/show/386374.Small_Gods))
    - Between two novels of different series, sort by series alphabetically (i.e [Small Gods](https://www.goodreads.com/book/show/386374.Small_Gods) before [A Closed and Common Orbit](https://www.goodreads.com/book/show/29475447-a-closed-and-common-orbit))
    - Between two novels of the same series, sort by series number (i.e [~~Faust~~Eric](https://www.goodreads.com/book/show/61642.Eric) before [Small Gods](https://www.goodreads.com/book/show/386374.Small_Gods))
    - Between two anthologies, the one with less stories should be ahead. (i.e. [Invisible Planets](https://www.goodreads.com/book/show/28220730-invisible-planets) before [Trigger Warning](https://www.goodreads.com/book/show/22522808-trigger-warning))
- ISBN sorts by the value of the number

When the library is shown, the book entry elements should not be visible.

## Filtering
**Bonus 8** The filtering panes should be initially hidden, and only displayed on request via some action element 

The following filtering options should be available to the user:

1. Filter by title or principal author (shows only books that contain a user-specified value in the title or author/editor field)  
1a. **Bonus 9** Also search in the authors of the stories in the anthologies
2. Filter by period (show only books that are in a user-specified period with a starting and ending year)  
2a. **Bonus 10** The start and end years are not mandatory, so searches in the form "All books published after 1980 are possible"
3. Display only novels  
4. **Bonus 11** Display only novels that are part of a series
5. Display only novels that are part of a user-specified series
6. Display only anthologies
7. **Bonus 12** Display only anthologies that contain original stories.

## Notes
The data should be persistent within the page session, i.e. it's ok to be lost upon page refresh (a.k.a. in-memory values are good enough).
However, it should be possible to change the application to use a persistent backend with minimum work possible.