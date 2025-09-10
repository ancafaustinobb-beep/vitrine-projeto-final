
import Link from 'next/link';

const produtos = Array.from({ length: 21 }, (_, i) => ({
  nome: `Produto ${i + 1}`,
  img: `/images/produto${i + 1}.jpg`,
  link: '#'
}));

export default function Home() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {produtos.map((produto, idx) => (
        <Link key={idx} href={produto.link}>
          <a style={{ textAlign: 'center', textDecoration: 'none', color: '#000' }}>
            <img src={produto.img} alt={produto.nome} style={{ width: '100%', borderRadius: '8px' }} />
            <p>{produto.nome}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
