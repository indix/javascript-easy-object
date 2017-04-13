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
  a: {
    v: 'a',
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
  a: {
    v: 'a',
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
  a: {
    v: 'a',
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
}

path : *.z

output: ['z1', 'z2', 'z3', 'z4']

```
### Usage
Above patterns can be composed with each other or can be used separately as per your need. With the above patterns you can do following actions :
```
     1. Get
     2. Put
     3. Delete
     4. Rename
     5. Get path
```
Get, put, delete method are well known actions. Rename action allows you to rename the key that is present in the object. Get-path allows you to specify any path traversal and it will return the path from root to the found element. Its return type is array of string(if more than one value found on traversal it will return all paths for those values).

Get has `isSafe` option which lets to return value or null safely instead of getting error on unknown path. Its default value is false. It is the third option in get function.

snippet :
```
import JEO from 'javascript-easy-object'

const jeo = new JEO('.') //delimitor value is optional. Default value is '\\.'
const values = jeo.get(object, path, true) // 3rd param is for isSafe mode
const modifiedObject = jeo.put(object, path, value)
const propertyDeletedObject = jeo.delete(object, path)
const renamedObject = jeo.rename(object, path, newName)
const paths = jeo.getPath(object, path)
```

### Conclusion
More options in JEO and patterns for traversal will be released in future. If you're interested to contribute, please feel free to fork and send in a Pull Request.
