import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Unform',
    description: 'Form in React',
    link: "http://github.com/Unform/Unform",
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />              
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}
