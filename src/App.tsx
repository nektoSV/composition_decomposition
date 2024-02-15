import './App.css';
import { List } from './components/List/List';
import { UsefulCard } from './components/UsefulCard/UsefulCard';
import { Image } from './components/Image/Image';
import { Weather } from './components/Weather/Weather';
import { listDataActive, listDataProgram, listDataBroadcast, listNewsTheme, listMenuTheme, listDataVisited, listDataWeather, listDataСurrency } from './data/listData';

function App() {
  return (
    <>
      <div className="card-news box">
        <div className="card-news-header">
          <List className="list" items={listNewsTheme} />
        </div>
        <div className="card-news-active">
          <List className="list-column" items={listDataActive} />
        </div>
        <List className="list currency opacity" items={listDataСurrency} />
      </div>
      <div className="search">
        <nav className="search-menu box">
          <List className="list" items={listMenuTheme} />
        </nav>
        <div className="search-content">
          <a href="#" className="search-logo">
            <Image src="https://avatars.dzeninfra.ru/get-zen_doc/3531091/pub_616094fdd416587b202effb3_616098f8508bef66365420cb/orig" alt="Яндекс" />
          </a>
          <form className="search-form">
            <input type="text" className="search-input" />
            <button className="btn search-btn">Найти</button>
          </form>
        </div>
      </div>
      <a className="marketing dox" href="https://www.tinkoff.ru/cards/debit-cards/tinkoff-black/form/payments-and-transfers/?utm_source=yandex&utm_medium=vdo.cpm&utm_campaign=debit.black_pip_0124_tb_media.rch_yandex_yarucross_pip_0124_rus_n_n&utm_term=tb.yandex.yarucross.reach.rus.n&utm_content=n.black_card.n.n.%7Ccid%7C105220138%7Cad_id%7C15682300146%7Ccrid%7C1130247094%7Cdvc%7Cdesktop%7Cgid%7C5381841134%7Csrc%7Cdzen.ru%7Cregionid%7C213&ub=1&adrclid=Dc8vjBs5LievmG78JmIA_MUSWp3SNFOFZkiwO0uY3ZbX9T1j98Q0Is2y2PRN8d4JqrPRd4iVjz9j004MtjhU"><Image src="https://acdn.tinkoff.ru/static/pages/files/4f64ad03-f64d-4936-b26d-d55f17030cce.png" alt="реклама" /></a>
      <>
        <div className="useful box">
          <UsefulCard title='Погода'>
            <Weather items={listDataWeather} />
          </UsefulCard>
          <UsefulCard title='Телепрограмма'>
            <List className="list-column opacity" items={listDataProgram} />
          </UsefulCard>
          <UsefulCard title='Эфир'>
            <List className="list-column opacity" items={listDataBroadcast} />
          </UsefulCard>
          <UsefulCard title='Посещаемое'>
          <List className="list-column" items={listDataVisited} />
          </UsefulCard>
        </div>
      </>
    </>
  )
}

export default App
