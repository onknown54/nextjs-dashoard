import postgres from "postgres";
import { neon } from "@neondatabase/serverless";

const sql = neon(
  process.env.nextjs_dashboard_POSTGRES_URL! ?? process.env.POSTGRES_URL!
);
async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     "Uncomment this file and remove this line. You can delete this file when you are finished.",
  // });

  try {
    return Response.json(await listInvoices());
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
