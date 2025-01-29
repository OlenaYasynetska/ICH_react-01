function ListsComponent() {
    return (
      <div>
        <h2>Упорядоченный список</h2>
        <ol>
          <li>Первый пункт</li>
          <li>
            Второй пункт
            <ol>
              <li>Вложенный пункт</li>
            </ol>
          </li>
        </ol>
  
        <h2>Неупорядоченный список</h2>
        <ul>
          <li>Первый пункт</li>
          <li>
            Второй пункт
            <ul>
              <li>Вложенный пункт</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
  
  export default ListsComponent;