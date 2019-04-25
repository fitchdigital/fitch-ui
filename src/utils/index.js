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
