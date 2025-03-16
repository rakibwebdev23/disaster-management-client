import Container from '../../Container/Container';
import img from "../../../assets/policy.jpg"

const cards = [
    {
        title: 'Flood Relief Support',
        description: 'Providing immediate aid and rehabilitation to flood-affected areas.',
        icon: '🌊',
    },
    {
        title: 'Emergency Medical Assistance',
        description: 'Medical care and support during disasters and emergencies.',
        icon: '🏥',
        highlighted: true,
        backgroundImage: true,
    },
    {
        title: 'Food and Shelter',
        description: 'Distributing food and providing temporary shelter to victims.',
        icon: '🍲',
    },
];

const Card = ({ title, description, icon, highlighted, backgroundImage }) => {
    return (
        <div
            className={`p-6 text-center overflow-hidden relative ${highlighted ? 'text-white' : 'bg-white text-gray-800'
                } transition duration-300 ease-in-out hover:shadow-lg`}
            style={backgroundImage ? {
                position: 'relative',
            } : {}}
        >
            {backgroundImage && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${img})`,
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-[#0E605A] opacity-70 z-10"></div>
                    <div className="relative z-20">
                        <div className="text-6xl mb-4">{icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{title}</h3>
                        <p className="mb-4">{description}</p>
                        <a href="#" className="text-[#F3C577] hover:underline font-medium">Read more</a>
                    </div>
                </>
            )}

            {!backgroundImage && (
                <>
                    <div className="text-6xl mb-4">{icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="mb-4">{description}</p>
                    <a href="#" className="text-[#F3C577] hover:underline font-medium">Read more</a>
                </>
            )}
        </div>
    );
};

const Policy = () => {
    return (
        <Container>
            <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </Container>
    );
};

export default Policy;