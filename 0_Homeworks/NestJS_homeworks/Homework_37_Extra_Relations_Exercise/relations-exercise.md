# Movies API - Relations Exercise

This exercise will help you strengthen your understanding of entity relationships using TypeORM within a NestJS application. You'll extend the current Movies API by modeling awards, production companies, and generating metadata through new endpoints.

Follow each step carefully to ensure all relationships are correctly set up and the API behaves as expected.

---

## 📌 Basic Requirements

1. Add entity for awards that will connect the awards to our typeorm project  
2. Make sure the many to many tables `movie_awards` and `actor_awards` are properly mapped out and are available  
3. Create a new endpoint in the movies service that will fetch all the awards that a movie has, name it `:id/awards` (use the ParseInt pipe for the parameter validation)  
4. Add entity for `production_companies` that will map out the data for the companies  
5. Add a composite entity for `movie_production_companies` that will connect movies and production_companies (follow what we did for cast_members to have everything correct)  
6. Add endpoints for production companies:  
   - **GET** `/production-companies` — Fetch all production companies  
   - **GET** `/production-companies/:id` — Fetches a production company by ID and also gets the `movie_production_companies` data and the related movie data as well (nested relations)  
7. Add a new endpoint in the movies service that fetches meta-data about all movies, the URL should be `/movies/meta-data` and it should return the following:  
   - Total count of movies  
   - Max budget of all the movies  
   - Min budget of all the movies  
   - Average budget of all the movies  

---

🚀 Good luck, and make sure to test all new endpoints thoroughly via Postman or Swagger!
