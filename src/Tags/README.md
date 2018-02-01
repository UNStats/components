Non-empty tags:

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

Disabled:

```jsx
<Tags
  tags={[
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" },
    { key: "yellow", value: "Yellow" },
    { key: "orange", value: "Orange" }
  ]}
  disabled={true}
  onClick={payload => console.log(`onClick: ${payload}`)}
/>
```

Empty tags:

```jsx
<Tags tags={[]} onClick={payload => console.log(`onClick: ${payload}`)} />
```
