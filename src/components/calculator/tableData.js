import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import React, { useEffect, useState } from "react"
import NumberFormat from "react-number-format"
import { useSelector } from "react-redux"

import styled from "styled-components"

const CalculatorSum = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
const TableData = () => {
  const [data, setData] = useState({
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
      },
      {
        label: "Tétel megnevezése",
        field: "name",
        sort: "asc",
      },
      {
        label: "Ár(bruttóban értendő)",
        field: "sum",
        sort: "asc",
      },
    ],
    rows: [
      {
        id: "1",
        name: "Könyvelési díj",
        sum: "0",
      },
      {
        id: "2",
        name: "Bérszámfejtési  díj",
        sum: "0",
      },
      {
        id: "3",
        name: "Összesen",
        sum: "0",
      },
    ],
  })
  const { rows } = useSelector(state => state.calculator)

  useEffect(() => {
    const table = data
    for (let i = 0; i < 3; i++) {
      const row = rows[i]
      const newRow = {
        id: row?.id,
        name: row?.name,
        sum: (
          <NumberFormat
            value={row.sum}
            displayType={"text"}
            thousandSeparator={" "}
            renderText={value => <div>{value} Forinttól</div>}
          />
        ),
      }
      table.rows[i] = newRow
    }
    setData({ ...table })
  }, [rows])

  return (
    <CalculatorSum>
      <MDBTable striped responsive>
        <MDBTableHead
          color="special-color"
          textWhite
          columns={data.columns}
        ></MDBTableHead>
        <MDBTableBody rows={data.rows}></MDBTableBody>
      </MDBTable>
    </CalculatorSum>
  )
}

export default TableData
