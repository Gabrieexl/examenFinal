from django.urls import path
from . import views

app_name = 'django_tareas'

urlpatterns = [
    path('', views.index,name='index'),
    path('consolaAdministrador',views.consolaAdministrador,name='consolaAdministrador'),
    path('cerrarSesion',views.cerrarSesion,name='cerrarSesion'),
    path('eliminarUsuario/<str:ind>',views.eliminarUsuario,name='eliminarUsuario'),
    path('verUsuario/<str:ind>',views.verUsuario, name='verUsuario'),
    path('nuevaTarea/<str:ind>', views.nuevaTarea, name='nuevaTarea'),
    path('devolverMensaje', views.devolverMensaje, name='devolverMensaje'),
    path('conseguirInfoTarea',views.conseguirInfoTarea,name='conseguirInfoTarea'),
    path('eliminarTarea/<str:idTarea>&<str:idUsuario>',views.eliminarTarea,name='eliminarTarea'),
    path('descargarTareas/<str:idUsuario>',views.descargarTareas,name='descargarTareas'),
    path('react', views.react, name='react'),
    path('iterarReact',views.iterarReact,name='iterarReact'),
    path('publicarComentario',views.publicarComentario,name='publicarComentario'),
    path('descargarReporteUsuarios',views.descargarReporteUsuarios,name='descargarReporteUsuarios'),
    path('obtener_datos_usuario/<int:user_id>/', views.obtener_datos_usuario, name='obtener_datos_usuario'),
    path('actualizar_datos_usuario/<int:user_id>/', views.actualizar_datos_usuario, name='actualizar_datos_usuario'),
    path('actualizar_estado_tarea/<int:tarea_id>/', views.actualizar_estado_tarea, name='actualizar_estado_tarea'),
]

