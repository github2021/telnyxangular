
##Log

Modified package.json


##Notes

Blog feed should list all posts and associated title, author, date and description, sorted by publish date from newest first
Users can view individual blog posts in a separate page
Users can view comments for a blog post
Users ​can​ ​add​ ​a​ ​comment​ ​to​ ​a​ ​blog​ ​post
Two​ ​or​ ​more​ ​distinct​ ​components​ ​demonstrating​ ​component​ ​hierarchy
At least​ ​one​ ​unit​ ​test


##Further Notes

Created basic application with following CLI command

ng new telnyxangular --style=scss --routing

&& cd telnyxangular 

&& ng g c shared/navigation
&& ng g c shared/footer

&& ng g class shared/models/blog-feed-summary
&& ng g class shared/models/blog
&& ng g class shared/models/comment

&& ng g c pages/about
&& ng g c pages/home
&& ng g c pages/blog-feed
&& ng g c pages/blog
&& ng g c pages/blog/comments/blog-comments-show
&& ng g c pages/blog/comments/blog-comments-post
&& ng g c pages/blog/comments/blog-comments-post-show-errors

&& ng g s restful-api