##Bug 1
In routes/auth.js, lines 42 and 44 were calling on functions that interacted with the database but did not use the await keyword. It always returned a token and crashed the app if there was an error.

##Bug2 
In middleware/auth.js line 49, there is no verification of the token; the app simply accepts any token presented to it and allows the user access. 

##Bug 3
In routes/users.js, the docstrings say it should return only basic information but it returns more; modified method in models/user.js to only return the requested info.

##Bug 4
