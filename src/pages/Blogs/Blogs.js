import React from 'react';
import SemiboldSpan from '../../components/SemiboldSpan';

const Blogs = () => {

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20 overflow-x-scroll">
            <div className="mb-10 border-t border-b divide-y">
                {/* question 1  */}
                <div className="grid py-8 md:grid-cols-4">
                    <div className="mb-4">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Question-1</p>
                            <p className="text-gray-600">25 MAY 2022</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="mb-3">
                            <p className="text-xl lg:text-2xl font-extrabold leading-none">
                                How will you improve the performance of a React Application?
                            </p>
                        </div>
                        <div className="text-gray-700 text-lg">
                            <p>
                                Improving the performance of a Application is the key of a application who is aware about user experience .
                                <br />
                                <br />
                                There are many ways to improve the performance of a React Application :
                            </p>
                            <ul className='list-inside list-disc'>
                                <li>Keep the component state local where it's necessary.</li>
                                <li>Make ensure that when it's necessary then re-render a component. </li>
                                <li>To prevent unnecessary re-render , we must only memorize a component when it's necessary'.</li>
                                <li>Use optimization technique like "Code-splitting" [by using import( )]'.</li>
                                <li>Use the concept of Windowing.</li>
                                <li>Use lazy loading image.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* question 2 */}
                <div className="grid py-8 md:grid-cols-4">
                    <div className="mb-4">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Question-2</p>
                            <p className="text-gray-600">25 MAY 2022</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="mb-3">
                            <p className="text-xl lg:text-2xl font-extrabold leading-none">
                                What are the different ways to manage a state in a React application?
                            </p>
                        </div>
                        <div className="text-gray-700 text-lg">
                            <p>
                                Plain JavaScript functions can't store information that's why we have to use State. The State is an object that contain certain component's information.
                                <br />
                                <br />
                                Well, there are a lots of different kinds of state and dozens of ways to manage each.
                                <br />
                                <SemiboldSpan>useReducer</SemiboldSpan> is a a way to manage state which will help the application perform well.
                                <br />
                                Sometimes we face some problem when we have a lot nested components and have to pass data in many child and siblings components here some unusual call-back occurs.
                                <br />
                                We can use <SemiboldSpan>useContext</SemiboldSpan> to avoid this "prop drilling" problem .
                                <br />
                                To avoid prop drilling and unpredictable behavior of state on complex state changes we can use <SemiboldSpan>Redux</SemiboldSpan>
                                <br />
                                Redux is a library which are being used in the React environment . There are three main building blocks in Redux.
                            </p>
                            <ul className='list-inside list-decimal'>
                                <li>A Store</li>
                                <li>A Reducer</li>
                                <li>An Action</li>
                            </ul>
                            <p>And, also there are also many <SemiboldSpan>libraries</SemiboldSpan> we can use to manage state.</p>
                        </div>
                    </div>
                </div>

                {/* question 3 */}
                <div className="grid py-8 md:grid-cols-4">
                    <div className="mb-4">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Question-3</p>
                            <p className="text-gray-600">25 MAY 2022</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="mb-3">
                            <p className="text-xl lg:text-2xl font-extrabold leading-none">
                                How does Prototypical Inheritance work?
                            </p>
                        </div>
                        <div className="text-gray-700 text-lg">
                            <p>Simply we can say, <SemiboldSpan>Prototypical Inheritance</SemiboldSpan> is sharing, extending or coping the Object and Methods. </p>
                            <p>
                                Prototypical inheritance is a method by which an object can inherit the properties and methods of another object.

                                To get the Prototype of an object and to set it, we can use Object.getPrototypeOf and Object.setPrototypeOf.
                                <br />
                                But, nowadays, it is being set using __proto__.
                            </p>
                            <br />
                            <p>
                                If you use <SemiboldSpan>ChildObject.__proto__ = ParentObject</SemiboldSpan>,
                                <br />
                                Here, ChildObject will get the properties and methods of ParentObject.
                            </p>
                        </div>
                    </div>
                </div>

                {/* question 4 */}
                <div className="grid py-8 md:grid-cols-4">
                    <div className="mb-4">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Question-4</p>
                            <p className="text-gray-600">25 MAY 2022</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="mb-3">
                            <p className="text-xl lg:text-2xl font-extrabold leading-none">
                                Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                            </p>
                        </div>
                        <div className="text-gray-700 text-lg space-y-3">
                            <p>
                                Setting <SemiboldSpan>state directly</SemiboldSpan> in React can makes odd bugs, and components that are hard to optimize.
                            </p>
                            <p>
                                We know that, React keeps a track record of all its virtual DOM. All the components are rendered, whenever a change happens and then, this new virtual DOM is compared with the old virtual DOM. <SemiboldSpan>Only the differences</SemiboldSpan> found are then reflected in the original DOM.
                            </p>
                            <p>
                                So, from this statement we can clearly understand that, if we set or mutate any state directly then, the reference of state in previous virtual DOM will be changed and React won't be able to see any changes, So it won't be see in the original Dom without reloading,
                            </p>
                            <p>
                                That why we use a <SemiboldSpan>function</SemiboldSpan> to update the state.
                            </p>
                        </div>
                    </div>
                </div>

                {/* question 5 */}
                <div className="grid py-8 md:grid-cols-4">
                    <div className="mb-4">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Question-5</p>
                            <p className="text-gray-600">25 MAY 2022</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="mb-3">
                            <p className="text-xl lg:text-2xl font-extrabold leading-none">
                                You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                            </p>
                        </div>
                        <div className="text-gray-700 text-lg space-y-3">
                            <p>
                                Suppose I have an array of products and each product's have details information including name and now I have to implement a search to find products by name.
                            </p>
                            <p>
                                I will explain it step by step :
                            </p>
                            <ul className='list-inside list-disc space-y-1'>
                                <li>
                                    Declare two state :
                                    <ul className='list-inside list-decimal text-base pl-6 italic bg-base-200'>
                                        <li>const [searchedText, setSearchedText] = useState('')</li>
                                        <li> const [searchedProduct, setSearchedProduct] = useState([])</li>
                                    </ul>
                                </li>
                                <li>Fetch the products array</li>
                                <li>
                                    After fetching , and when we get data then filter data by searchedText
                                    <p className='text-base pl-6 italic bg-base-200'>
                                        const match = data.filter(product =&gt; (product.name).toLowerCase().includes((searchedText).toLowerCase()))
                                    </p>
                                </li>
                                <li>
                                    set the searchedProduct by match
                                    <p className='text-base pl-6 italic bg-base-200'>
                                        setSearchedProduct(match)
                                    </p>
                                </li>
                                <li>Put searchedText in dependency in useEffect</li>
                                <li>Write an input field for search the name and add a onChange function here</li>
                                <li>
                                    Inside of onChange function set the searchedText by e.target.value
                                    <p className='text-base pl-6 italic bg-base-200'>
                                        setSearchedText(e.target.value);
                                    </p>
                                </li>
                                <li>
                                    map the the searchedProduct and show it in UI.
                                    <p className='text-base pl-6 italic bg-base-200'>
                                        searchedProduct.map(product =&gt; &lt;h1&gt; &#123;product.name&#x2775; &lt;/h1&gt; )
                                    </p>
                                </li>
                                <li>Now, if I search the name of product it will show me the result by name.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* question 6 */}
                <div className="grid py-8 md:grid-cols-4">
                    <div className="mb-4">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p>Question-6</p>
                            <p className="text-gray-600">25 MAY 2022</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="mb-3">
                            <p className="text-xl lg:text-2xl font-extrabold leading-none">
                                What is a unit test? Why should write unit tests?
                            </p>
                        </div>
                        <div className="text-gray-700 text-lg space-y-3">
                            <p>
                                <SemiboldSpan>Unit test</SemiboldSpan> is a type of application test where every components of an application are tested individually.
                            </p>
                            <p>
                                During the development of an application the <SemiboldSpan>Unit testing</SemiboldSpan> is done by developers to verify the correctness of a component by isolating a component.
                            </p>
                            <ul className='list-inside list-disc'>
                                <li>Unit tests help to fix bugs early in the development cycle and save costs.</li>
                                <li>It helps a developer to write better code, more efficiently</li>
                                <li>It helps developer to decide where to make changes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;