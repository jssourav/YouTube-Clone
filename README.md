Debouncing:

typing slow = 200ms (difference between two key strock)
typing fast = 30ms (difference between two key strock)

Performance:

- iphone pro max = 14 letter \* 1000 = 14000 (If we call API with every key strock, 1000 users)
- with Debouncing = 3 API calls \* 1000 = 3000

Debouncing with 200ms

- if difference between two key strokes is <200ms - DECLINE the API call
- if > 200ms - make an API call
