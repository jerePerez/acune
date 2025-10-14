import React, { useMemo } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonios.css';

const allTestimonials = [
    { name: 'María González', text: 'El acompañamiento durante mi embarazo fue excepcional. Me sentí segura y cuidada.', initial: 'M', color: 'bg-coral' },
    { name: 'Ana Rodríguez', text: 'Los ejercicios postparto me ayudaron a recuperar mi fuerza y confianza. ¡Recomiendo totalmente!', initial: 'A', color: 'bg-mint' },
    { name: 'Laura Martín', text: 'Gracias al apoyo en lactancia, pude disfrutar plenamente de esta hermosa experiencia con mi bebé.', initial: 'L', color: 'bg-lavender' },
    { name: 'Sofía Pérez', text: 'La preparación al parto fue clave. Sentí que entendía todo el proceso y eso me dio mucha tranquilidad.', initial: 'S', color: 'bg-lavender' },
    { name: 'Elena Torres', text: 'El trato humano y profesionalismo es inigualable. Me guiaron en cada duda que tuve.', initial: 'E', color: 'bg-mint' },
    { name: 'Carla Díaz', text: 'Clases dinámicas y muy bien explicadas. Mi pareja y yo aprendimos muchísimo. ¡Gracias!', initial: 'C', color: 'bg-lavender' },
    { name: 'Isabel Ruiz', text: 'Desde el primer día me sentí en un espacio seguro para compartir mis miedos y alegrías.', initial: 'I', color: 'bg-coral' },
    { name: 'Natalia Blanco', text: 'Los consejos para el cuidado del recién nacido fueron súper prácticos y me ayudaron en casa.', initial: 'N', color: 'bg-mint' },
    { name: 'Andrea Jiménez', text: 'Recuperé mi figura y mi energía más rápido de lo que imaginé, gracias al programa postparto.', initial: 'A', color: 'bg-coral' },
    { name: 'Marta Vidal', text: 'Un servicio 5 estrellas. Cada sesión fue de gran ayuda, tanto física como emocionalmente.', initial: 'M', color: 'bg-lavender' }
];

// Función para obtener 'n' elementos aleatorios de un array
const getRandomItems = (arr, count) => {
    // 1. Crea una copia del array para no modificar el original
    const shuffled = [...arr];

    // 2. Mezcla el array (Algoritmo de Fisher-Yates)
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 3. Devuelve los primeros 'count' elementos
    return shuffled.slice(0, count);
};

function Testimonios() {
    // Usa useMemo para calcular los 3 testimonios aleatorios solo una vez
    // cuando el componente se monta, garantizando que sean fijos hasta la próxima recarga.
    const randomTestimonials = useMemo(() => getRandomItems(allTestimonials, 3), []);

    return (
        <section id="testimonios" className="bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-dark">Lo Que Dicen Nuestras Mamás</h2>
                </div>
                <Row className="g-4">
                    {/* Mapea y renderiza solo los 3 testimonios aleatorios */}
                    {randomTestimonials.map((item, index) => (
                        <Col lg={4} md={6} key={index}>
                            <Card className="h-100 border-0 bg-cream p-3 rounded-4 shadow-sm">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        {/* Inicial y color del testimonio */}
                                        <div className={`testimonial-initial ${item.color}`}>{item.initial}</div>
                                        <div>
                                            <h5 className="fw-semibold mb-0">{item.name}</h5>
                                            <div className="text-warning">⭐⭐⭐⭐⭐</div>
                                        </div>
                                    </div>
                                    <Card.Text className="text-muted">"{item.text}"</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Testimonios;