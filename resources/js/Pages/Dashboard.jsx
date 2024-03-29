import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from "@inertiajs/react";

export default function Dashboard({ auth, students }) {

    const deleteStudent = (student) => {
        if (!window.confirm("Are you sure you want to delete the student?")) {
            return;
        }
        router.delete(route("student.destroy", student.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Dashboard
                    </h2>
                    <Link
                        href={route("student.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add New Student
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Image</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Age</th>
                                        <th className="px-4 py-2">Status</th>
                                        <th className="px-4 py-2 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.data.map((student) => {

                                        return <tr key={student.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-4 py-2">{student.id}</td>
                                            <td className="px-4 py-2">
                                                <img src={student.image} alt={student.name} className="w-8 h-8 rounded-full" />
                                            </td>
                                            <td className="px-4 py-2">{student.name}</td>
                                            <td className="px-4 py-2">{student.age}</td>
                                            <td className="px-4 py-2">{student.status}</td>
                                            <td className="px-4 py-2 text-right">
                                                <Link href={route('student.show', student.id)} className="text-green-600 dark:text-green-500 hover:underline mx-1">View</Link>
                                                <Link href={route('student.edit', student.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
                                                <button
                                                    onClick={(e) => deleteStudent(student)}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                >
                                                    Delete
                                                </button>
                                            </td>

                                        </tr>
                                    })}
                                </tbody>
                            </table>
                            <Pagination links={students.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
