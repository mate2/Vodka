# Vodka
Vodka help you generate your REST API documentation easily just by typing a simple (or two) json files !


#Why Vodka ?

* Easy to build your documentation by typing one simple JSON files !
* Easy to maintain !
* Any member of your team can edit json file to have an eye on state of all your API calls !


#Installation instructions

Vodka is a simple angular single page web app with no database or backend needed. You can use it locally or have it on a simple http server.


#Configurations instructions

* First, you need to write a json file for your categories (./json/categories.json) of your REST calls like this :

```json
[
	"category1",
	"category2",
	"category3"
]
```

Separate categories title from the json calls file is just in order to be able to work on the json, add some incomplete categories without displaying it in the documentation until they are ready.


* Then you just have to complete your json (./json/calls.json) with all your calls by categories like this : 

```json
{
	"category1" : {
		"title" : "Category 1",
		"calls" : [
			{
				"title" : "Get all call 1",
				"description" : "description call 1",
				"method" : "GET",
				"url" : "{{url}}",
				"address" : "/category1/",
				"params" : [
					"token"
				],
				"return" : "return list of category1",
				"example" : "/category1/?token=123",
				"status" : "green",
				"comment" : "online"
			},
			{
				"title" : "Get call 1-2 X",
				"description" : "description call 1-2",
				"method" : "GET",
				"url" : "{{url}}",
				"address" : "/category1/[X]/",
				"params" : [
					"[X] = id",
					"token"
				],
				"return" : "return object X of category1",
				"example" : "/category1/42/?token=123",
				"status" : "green",
				"comment" : "online"
			}
		]
	},
	"category2" :{
		"title" : "Category 2",
		"calls" : [
			{
				"title" : "call 2",
				"description" : "description call 2",
				"method" : "POST",
				"url" : "{{url}}",
				"address" : "/category2/",
				"params" : [
					{
						"title of params 1" : [
							"param1",
							"param2"
						]
					},
					{
						"title of params 2" : [
							"param 3",
							"param 4"
						]
					}
				],
				"return" : "return post object",
				"example" : "/category2/?param1=param1&param2=param2",
				"status" : "orange",
				"comment" : "doesn't return good objet, please fix it"
			},
			{
				"title" : "call 2-2",
				"description" : "description call 2-2",
				"method" : "PUT",
				"url" : "{{url}}",
				"address" : "/category2/[X]",
				"params" : [
					"[X] = id",
					"token",
					"param1"
				],
				"return" : "return put object",
				"example" : "/category2/42/?param1=param1-modified",
				"status" : "green",
				"comment" : "online"
			}
		]
	},
	"category3" : {
		"title" : "Category 3",
		"calls" : [
			{
				"title" : "delete call 3",
				"description" : "description call 3",
				"method" : "DELETE",
				"url" : "{{url}}",
				"address" : "/category3/[X]",
				"params" : [
				    "[X] = id",
					"token"
				],
				"return" : "return success or fail message",
				"example" : "/category3/42?token=123",
				"status" : "red",
				"comment" : "to do"
			}
		]
	}
}
```

* Here is the list of params used to be displayed : 
    * Key : same as the category name (REST category)
    * Title : to be displayed in the panel title of the call documentation
    * Description : small explanation of what the call is suppposed to do
    * Method : http request method (caps)
    * Url : root of your api url (ex : http://api.mysite.com)
    * Address : all the path after the root url of your api for your call, without params (ex : /category/ )
    * Params : array or object of arrays (with a title) of calls
    * Return : explain what is returned by the call
    * Example : example of a functionnal url of the call. Just type same address than in address field with the params. Root url will be added automatically
    * Status : green, orange or red to display a status icon of the link
    * Comment : comment about the status of the call, ok, something to change, ...


#Tools Used
* Angular
* Bootstrap
* Sass 
* Compass (to rebuild automatically css while working on it : type command line "compass watch" in root folder)


#Interested ? Ideas to improve / Todo List

* Create a function for the link on the example call to be able to manage POST/PUT/DELETE  http links too
* Create an admin page to edit the json files directly in the webapp
* Write some scripts to generate json files from a dump of database structure (mongo, ...)
* Any other great idea of improvement !