import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderContentProps = {
  order: OrderItem[]
  removeItem: (id: OrderItem["id"]) => void
}

export default function OrderContents({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-bold text-3xl">Consumo</h2>
      <div className="mt-10">
        {order.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-4 last-of-type:border-b"
          >
            <div className="flex=1">
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-bold">
                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-bold"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
