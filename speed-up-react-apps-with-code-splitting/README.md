# Speed Up Your React Apps With Code Splitting

* <https://www.youtube.com/watch?v=JU6sl_yyZqs>

```bash
const AdminData = lazy(() =>
    import("./AdminData").then(module => {
        return { default: module.AdminData }
    })
)

<Suspense fallback={<h2>Loading...</h2>}>
    {isAdmin ? <AdminData />: <h2>Not Admin</h2>}
</Suspense>
```

```bash
const [isPending, startTransition] = useTransition()

{isPending && "Loading"}
<button onClick={() => {
    startTransition(() => {
        setIsAdmin(prev => !prev)
    })
}}>Toggle Admin</button>
```

```bash
import { lazy } from "react"

export function lazyLoad(path, namedExport) {
    return lazy(() => {
        const promise = import(path)
        if (namedExport == null) {
            return promise
        } else {
            return promise.then(module => ({ default: module[namedExport] }))
        }
    })
}

lazyLoad("./components/About", "About");
```