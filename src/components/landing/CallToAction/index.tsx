import { Button } from 'antd';

const CallToAction = () => {
    return (
        <section className="w-full px-6 pb-20">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#2beea0 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Share Your Skills?</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">Join a global community of lifelong learners today. It's free to join and start swapping.</p>
                    <Button size="large" className="h-14 px-10 rounded-full bg-[#2beea0] text-slate-900 font-bold border-none hover:scale-105 transition-transform">
                        Get Started Now
                    </Button>
                    <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;