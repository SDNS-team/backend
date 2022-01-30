# App - friend

## Example

### Mutation

```
mutation {
  createFriend(createFriend: {
    name: "JEDI",
    birthday: "2019-12-03T09:54:33Z"
  }) {
    id
    name
  }
}
```

### Query

```
query {
	friends(take: 5) {
    name
  }
}
```