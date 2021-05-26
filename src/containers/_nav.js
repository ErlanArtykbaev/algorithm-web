export const NavItems = [
  {
    id: 0,
    mainName: "Списки",
    key: "lists",
    icon: "",
    items: [
      {
        id: 0,
        to: "/lists/what-is-list",
        name: "Что такое списки",
        key: "lists-1",
      },
      {
        id: 1,
        to: "/lists/singly",
        name: "Односвязные списки",
        key: "lists-2",
      },
      { id: 2, to: "/lists/doubly", name: "Двусвязные списки", key: "lists-3" },
      { id: 3, to: "/lists/visual", name: "Визуализация", key: "lists-4" },
    ],
  },
  {
    id: 1,
    mainName: "Стеки",
    key: "queues",
    items: [
      { id: 0, to: "/sort", name: "Стеки", key: "queueus-1" },
      { id: 1, to: "/sort", name: "Очередь", key: "queueus-2" },
      { id: 2, to: "/sort", name: "Приоритетные очереди", key: "queues-3" },
      { id: 3, to: "/sort", name: "Визуализация", key: "queues-4" },
    ],
  },
  {
    id: 2,
    mainName: "Сортировка",
    key: "sort",
    items: [
      { id: 0, to: "/sort", name: "Что такое сортировка", key: "sort-1" },
      { id: 1, to: "/sort", name: "Визуализация", key: "sort-2" },
    ],
  },
  {
    id: 3,
    mainName: "О большое",
    key: "o-big",
    items: [
      { id: 0, to: "/lists", name: "Что такое O большое", key: "o-big-1" },
      { id: 3, to: "/sort", name: "Примеры", key: "o-big-2" },
    ],
  },
  {
    id: 4,
    mainName: "Бинарное дерево",
    key: "binary-tree",
    items: [
      { id: 0, to: "/sort", name: "Что такое дерево", key: "binary-tree-1" },
      { id: 1, to: "/sort", name: "Бинарные деревья", key: "binary-tree-2" },
      { id: 2, to: "/sort", name: "Вставка элемента", key: "binary-tree-3" },
      { id: 3, to: "/sort", name: "Удаление элемента", key: "binary-tree-4" },
      { id: 4, to: "/sort", name: "Обходы", key: "binary-tree-5" },
      { id: 5, to: "/sort", name: "Поиск узла", key: "binary-tree-6" },
      { id: 3, to: "/sort", name: "Визуализация", key: "binary-tree-7" },
    ],
  },
  {
    id: 5,
    mainName: "Пирамиды",
    key: "pyramids",
    items: [
      { id: 0, to: "/sort", name: "Что такое пирамиды", key: "pyramids-1" },
      {
        id: 1,
        to: "/sort",
        name: "Пирамидальная сортировка",
        key: "pyramids-2",
      },
      { id: 2, to: "/sort", name: "Визуализация", key: "pyramids-3" },
    ],
  },
  {
    id: 6,
    mainName: "Хэш - таблицы",
    key: "hash",
    items: [
      { id: 0, to: "/sort", name: "Что такое хэш таблицы", key: "hash-1" },
      { id: 1, to: "/sort", name: "Примеры", key: "hash-2" },
    ],
  },
  {
    id: 7,
    mainName: "Set",
    key: "set",
    items: [
      { id: 0, to: "/sort", name: "Что такое Set", key: "set-1" },
      { id: 1, to: "/sort", name: "Примеры", key: "set-2" },
    ],
  },
  {
    id: 8,
    mainName: "Map",
    key: "map",
    items: [
      { id: 0, to: "/sort", name: "Что такое Map", key: "map-1" },
      { id: 1, to: "/sort", name: "Примеры", key: "map-2" },
    ],
  },
  {
    id: 9,
    mainName: "Графы",
    key: "graph",
    items: [
      { id: 0, to: "/sort", name: "Что такое Графы", key: "graph-1" },
      { id: 1, to: "/sort", name: "Алгоритмы над графами", key: "graph-2" },
      { id: 2, to: "/sort", name: "Примеры", key: "graph-3" },
    ],
  },
]
