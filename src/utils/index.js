// used to exclude factory properties and returns all other properties.
// this allows an input field to be passed any extra parameters without compromising
// the component's logic.
// example:
// <TextInput name="test" aria-label="a test" />
// will allow the non factory props `name` and `aria-label` to be added to the
// resulting <input />
export const excludeFactoryProps = (excludes, factory) => {
    const values = Object.assign({}, factory);

    for (let i = 0; i < excludes.length; i++) {
        delete values[excludes[i]];
    }

    return values;
};

// extracts all unique keys from an array of objects that might have all keys
// or some might have different keys. used in the lists to generate LABELS
export const extractAllUniquePropsFromArrayObjects = (data, key) => {
    const keys = [];
    for (let i = 0; i < data.length; i++) {
        const deep = data[i][key];
        const p = Object.keys(deep || {});
        for (let j = 0; j < p.length; j++) {
            if (!keys.includes(p[j])) {
                keys.push(p[j]);
            }
        }
    }

    return keys;
};
