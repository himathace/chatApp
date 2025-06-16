import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Site(){

        useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);



    return(
        
        <>
            <div class="fixed left-0 top-0 -z-10 h-full w-full">
                <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
            </div>
            
    

            <div className="relative mx-auto h-screen w-full max-w-8xl px-6 md:px-8 lg:px-12 ">
                <div className=" text-white">
                    <header className=" shadow">
                        <div className="container mx-auto px-4 py-6 flex justify-between items-center fixed left-0 right-0 top-0 bg-black/10 backdrop-blur-2xl z-50">
                            <div className="text-xl font-bold">YONG</div>
                            <nav className="hidden md:block">
                                <ul className="flex space-x-6">
                                    <li><a href="#main" className="hover:text-blue-500">Home</a></li>
                                    <li><a href="#feat" className="hover:text-blue-500">features</a></li>
                                    <li><a href="#sign" className="hover:text-blue-500">sign up</a></li>
                                    <li><a href="#sign" className="hover:text-blue-500">Contact</a></li>
                                </ul>
                            </nav>
                            <button className="md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </header>

                    <section className="pt-56 h-screen" id="main">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Talk Freely, Anytime</h1>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-400">A app makes messaging fast, easy, and secure — built for smooth conversations without Any interruptions.</p>
                            <div className="flex justify-center gap-4">
                                <a href="/login" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">Get Started</a>
                                <a href="#" class="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md">Learn More</a>
                            </div>
                        </div>
                    </section>

                    <div id="feat"></div>


                    <section className="pb-16" data-aos="fade-up">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
                            <div className="grid md:grid-cols-3 gap-8">

                                <div className="bg-slate-900 p-6 rounded-lg shadow-sm shadow-gray-700" data-aos="flip-up">
                                    <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Fast & Responsive</h3>
                                    <p className="text-gray-400">Built with performance and responsiveness in mind for all device sizes.</p>
                                </div>
                                

                                <div className="bg-slate-900 p-6 rounded-lg shadow-sm" data-aos="flip-up">
                                    <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                                    <p className="text-gray-400">Easily customize colors, components, and layouts to match your brand.</p>
                                </div>
                                

                                <div className="bg-slate-900 p-6 rounded-lg shadow-sm" data-aos="flip-up">
                                    <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                                    <p className="text-gray-400">Clean, minimal design that follows modern web design principles.</p>
                                </div>

                                <div className="bg-slate-900 p-6 rounded-lg shadow-sm" data-aos="flip-up">
                                    <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
                                    <p className="text-gray-400">All conversations are protected with end-to-end encryption, ensuring your data stays private and secure.</p>
                                </div>


                                <div className="bg-slate-900 p-6 rounded-lg shadow-sm" data-aos="flip-up">
                                    <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Cross-Platform Support</h3>
                                    <p className="text-gray-400">Chat seamlessly across devices — whether on mobile, tablet, or desktop — without missing a message.</p>
                                </div>


                                <div className="bg-slate-900 p-6 rounded-lg shadow-sm" data-aos="flip-up">
                                    <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                                    <p className="text-gray-400">Clean, minimal design that follows modern web design principles.</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400" id="sign"></div>

                    <section className="py-16  text-white">
                        <div className="container mx-auto px-4 text-center" data-aos="fade-up" data-aos-duration="500">
                            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">Join thousands of users who are already using our platform to build amazing websites.</p>
                            <a href="#" className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 rounded-md font-medium">Sign Up Now</a>
                        </div>
                    </section>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"></div>

                    <footer className=" text-white py-12">
                        <div className="container mx-auto px-4">
                            <div className="grid md:grid-cols-4 gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                                    <p className="text-gray-400">A brief description of your company and what you do.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                    <ul className="space-y-2 text-gray-400">
                                        <li><a href="#" className="hover:text-white">Home</a></li>
                                        <li><a href="#" className="hover:text-white">About</a></li>
                                        <li><a href="#" className="hover:text-white">Services</a></li>
                                        <li><a href="#" className="hover:text-white">Contact</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                                    <ul className="space-y-2 text-gray-400">
                                        <li>123 New street, Colombo 07</li>
                                        <li>young@123gmail.com</li>
                                        <li>(123) 456-7890</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="hover:text-blue-400">
                                            <span className="sr-only">Facebook</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="hover:text-blue-400">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href="#" className="hover:text-pink-400">
                                            <span className="sr-only">Instagram</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                                <p>&copy; 2025 Yong PVT LTD. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>

        
            

        

    )

}

export default Site