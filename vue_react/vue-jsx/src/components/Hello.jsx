import {
    defineComponent,
} from 'vue'

export default defineComponent({
    name: 'HelloJSX',
    props: {
        msg: String
    },
    setup(props) {
        return () => (
            <div className="hello">
                <h1>{props.msg}</h1>
                <p>This is a JSX component</p>
            </div>
        )
    }

})