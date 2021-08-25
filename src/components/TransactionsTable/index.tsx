import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>24/08/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>24/08/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>24/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )

}