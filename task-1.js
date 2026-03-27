 	const a= {
    	"Datastructures":
 	   [
        	{
             	"Name": "tree",
                "course":"Intro",
                "content":["1","B","C"]
        	},
        	{
            	"Name": "tree1",
                "course":"Intro1",
                "content":["1","B","C","d"]
        	}
    	],
    	"xyz":
    	{
            "Name":"Graphics",
            "Topic":["BFS","CDF","Sorting"],
    	}
  	}
    console.log(a)
    console.log(a.Datastructures[1].Name)
    console.log(a.Datastructures[0].Name)
    console.log(a.xyz.Name)

    // (3) ['BFS', 'CDF', 'Sorting']
    console.log(a.xyz.Topic)
    console.log(a.xyz.Topic[0])
    console.log(a.xyz.Topic)

    // {Name: 'tree1', course: 'Intro1', content: Array(4)}
    console.log(a.Datastructures[1])
        console.log(a.Datastructures[3])

        // {Name: 'Graphics', Topic: Array(3)}
        console.log(a.xyz)