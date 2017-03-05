# Javascript Easy Object (JEO)
A module for handling all the action related to object in one step with multi pattern traversal.

### Traversal Patterns
* Direct method : 
This is direct access to value through the path string separated by the delimitor during the JEO object initialization.
Eg. For accessing the value `e` in the object `{ a: 'b', c: { d: 'e' } }`, you can use path as `a\\.c\\.d`
In above the delimitor is `\\.` which is the default value. You can change it by passing delimitor that you want during JEO object initialization.

* Filter method : 
This method allows you to pick certain key or pattern in the object.
Eg.
```
object :

{
  a: 'a',
  b: {
    z: 'z1'
  },
  c: {
    z: 'z2'
  },
  d: {
    z: 'z3
  }
}

path : a.[b,d].z

output: ['z1', 'z3']

```

* One level skip method : 
This method allows you to skip a level and search for the pattern that you want.
Eg.
```
object :

{
  a: 'a',
  b: {
    z: 'z1'
  },
  c: {
    z: 'z2'
  },
  d: {
    z: 'z3
  }
}

path : a.?.z

output : ['z1', 'z2', 'z3']

```

* Any level skip method : 
This method allows you to pick the value for pattern without even knowing the path.
Eg.
```
object :

{
  a: 'a',
  b: {
    z: 'z1'
  },
  c: {
    z: 'z2'
  },
  d: {
    z: 'z3
  },
  e: {
    f: {
      z: 'z4'
    }
  }
}

path : *.z

output: ['z1', 'z2', 'z3', 'z4']

```
### Usage
Above patterns can be composed with each other or can be used separately as per your need. With the above patterns you can do following actions :
     1. Get
     2. Put
     3. Delete
     4. Rename
Get, put, delete method are well known actions. Rename action allows you to rename the key that is present in the object.

snippet :
```
import JEO from 'javascript-easy-object'

const jeo = new JEO()
const values = jeo.get(object, path)
const modifiedObject = jeo.put(object, path, value)
const propertyDeletedObject = jeo.delete(object, path)
const renamedObject = jeo.rename(object, path, newName) 
```

### Conclusion
More options in JEO and patterns for traversal will be released in future. If you're interested to contribute, please feel free to fork and send in a Pull Request.
