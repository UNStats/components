Tags with non-empty tags:

```jsx
<Tags
  tags={[
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" },
    { key: "yellow", value: "Yellow" },
    { key: "orange", value: "Orange" }
  ]}
  onClick={payload => console.log(`onClick: ${payload}`)}
/>
```

Tags with empty tags:

```jsx
<Tags tags={[]} onClick={payload => console.log(`onClick: ${payload}`)} />
```
