export class Jugador {
  id:number;
  nombre:string;
  nombreUsuario: string;
  DCI:string;
  email:string;

  constructor(id: number, nombre: string, nombreUsuario: string, DCI: string, email: string) {
    this.id = id;
    this.nombre = nombre;
    this.nombreUsuario = nombreUsuario;
    this.DCI = DCI;
    this.email = email;
  }
}


/*  @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private String nombre;

    @NotNull
    @Column(unique = true)
    private String nombreUsuario;


    private String DCI;

    @NotNull
    @Column(unique=true)
    private String email;

    @NotNull
    private String password;*/
