# Live News API with Apollo Server V4 Subscriptions and GraphQL

<https://www.youtube.com/watch?v=0y81xnYGWUg>

```bash
mutation Mutation($title: String, $description: String) {
  createNewsEvent(title: $title, description: $description) {
    title
    description
  }
}
```

```bash
subscription Subscription {
  newsFeed {
    title
    description
  }
}
```
