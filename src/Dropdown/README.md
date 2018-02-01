Selected value corresponds to option key:

```jsx
<Dropdown
  options={[
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" }
  ]}
  value="blue"
  onChange={payload => console.log(`onChange: ${payload}`)}
/>
```

Selected value does not correspond to option key:

```jsx
<Dropdown
  options={[
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" }
  ]}
  value="black"
  onChange={payload => console.log(`onChange: ${payload}`)}
/>
```

No selected value:

```jsx
<Dropdown
  options={[
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" }
  ]}
  onChange={payload => console.log(`onChange: ${payload}`)}
/>
```

Empty options:

```jsx
<Dropdown
  options={[]}
  onChange={payload => console.log(`onChange: ${payload}`)}
/>
```

Custom placeholder:

```jsx
<Dropdown
  options={[
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" }
  ]}
  value="black"
  placeholder="Make your selection..."
  onChange={payload => console.log(`onChange: ${payload}`)}
/>
```

Disabled:

```jsx
<Dropdown
  options={[
    { key: "red", value: "Red" },
    { key: "green", value: "Green" },
    { key: "blue", value: "Blue" }
  ]}
  value="blue"
  onChange={payload => console.log(`onChange: ${payload}`)}
  disabled
/>
```
