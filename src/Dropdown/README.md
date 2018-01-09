Dropdown with selected value corresponding to option key in options:

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

Dropdown with selected value not corresponding to option key in options:

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

Dropdown without selected value:

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

Dropdown with empty options:

```jsx
<Dropdown
  options={[]}
  onChange={payload => console.log(`onChange: ${payload}`)}
/>
```

Dropdown with custom placeholder:

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
